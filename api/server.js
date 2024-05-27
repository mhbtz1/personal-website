//use CommonJS for Netlify Functions

console.log("Running api.cjs...")

const fs = require('fs').promises
const path = require('path')
const express = require('express')
const { createViteServer} = require('vite')
const mime = require('mime-types')

/*
import fs from "node:fs/promises";
import path from 'path';
import express from 'express';
import { createViteServer } from 'vite';
import serverless from 'serverless-http';
import mime from 'mime-types';
*/

const app = express()
//const __dirname = import.meta.url
console.log("static path: ", path.join(__dirname, '../dist'))
app.use(express.static(path.join(__dirname, '../dist'))) //all file requests from browser to server will look in this static directory

// When the server restarts (for example after the user modifies
// vite.config.js), `vite.middlewares` is still going to be the same
// reference (with a new internal stack of Vite and plugin-injected
// middlewares). The following is valid even after restarts.


//for fetching minified JS/CSS files
app.use(async (req, res, next) => {
  const filePath = path.join(__dirname, '../dist', req.url).substring(5);
  console.log("filePath: ", filePath)
  let fs = (await import('fs'))
  if (fs.existsSync(filePath)) {
    console.log(filePath +  " exists.")
    const mimeType = mime.lookup(filePath);
    if (mimeType) {
      console.log("mimeType: " + mimeType)
      res.setHeader('Content-Type', mimeType).sendFile(filePath)
      //let fs = (await import('node:fs/promises'))
    } else {
      next();
    }
  } else {
    next();
  }
});

app.get('/api', async (req, res, next) => {
  console.log("run default endpoint")
  res.socket.on("error", (error) => console.log("Fatal error", error))
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })
  try {
    // 1. Read index.html
    const template = await fs.readFile(path.join(__dirname, '../dist/index.html').substring(5), { "encoding" : 'utf-8' } )
    const render = (await vite.ssrLoadModule(path.join(__dirname, '../src/entry-server.tsx').substring(5))).render
    const { reactContent } = await render()
    console.log("appHtml: ", reactContent)
    console.log("template: ", template)
    const html = template.replace('<!--reactContent -->', reactContent)
    // 5. Inject the app-rendered HTML into the template.

    // 6. Send the rendered HTML back.
    res.status(200).send(html)
  } catch (e) {
    // If an error is caught, let Vite fix the stack trace so it maps back
    // to your actual source code.
    vite.ssrFixStacktrace(e)
    next(e)
  }
})

//seems kind of dumb to use SSR for each resource endpoint, if the point is for SEO
app.get('/api/about', async (req, res) => {


  console.log("run about endpoint")
  res.socket.on("error", (error) => console.log("Fatal error", error))
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })
  try {

    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    })
    // 1. Read index.html
    const template = await fs.readFile(path.join(__dirname, '../index.html').substring(5), { "encoding" : 'utf-8' } )
    const render = (await vite.ssrLoadModule(path.join(__dirname, '../src/entry-server.tsx').substring(5)))
    const { reactContent } = await render.render()
    const { about } = await render.renderAbout()
    console.log("appHtml: ", reactContent)
    console.log("template: ", template)
    const html = template.replace('<!--reactContent -->', reactContent)
    const html2 = html.replace('<!--content -->', about)
    // 5. Inject the app-rendered HTML into the template.

    // 6. Send the rendered HTML back.
    res.status(200).send(html2)
  } catch (e) {
    // If an error is caught, let Vite fix the stack trace so it maps back
    // to your actual source code.
    vite.ssrFixStacktrace(e)
  }
})

app.get('/api/resume', async (req, res) => {
  console.log("run resume endpoint")
  res.socket.on("error", (error) => console.log("Fatal error", error))
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })
  try {
    // 1. Read index.html
    const template = await fs.readFile(path.join(__dirname, '../index.html').substring(5), { "encoding" : 'utf-8' } )
    const render = (await vite.ssrLoadModule(path.join(__dirname, '../src/resume-ssr.tsx').substring(5)))
    const { resume } = await render.renderResume()
    const html2 = template.replace('<!--resumeContent -->', resume)
      // 5. Inject the app-rendered HTML into the template.
  
      console.log(html2)
      res.status(200).send(html2)
      console.log("Sent HTML!")
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back
      // to your actual source code.
      vite.ssrFixStacktrace(e)
    }

  })

  app.listen(5173, () => console.log("Serve ready on port 5173") )
  
  module.exports = app

