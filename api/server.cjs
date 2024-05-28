//use CommonJS for Netlify Functions

console.log("Running api.cjs...")



const fs = require("fs/promises")
const path = require("path")
const express = require('express')
const { createServer: createViteServer } = require('vite')
const mime = require('mime-types')
const port = process.env.PORT || 4000;
//import '@rollup/rollup-linux-x64-gnu'

/*
import fs from "node:fs/promises";
import path from 'path';
import express from 'express';
import { createViteServer } from 'vite';
import serverless from 'serverless-http';
import mime from 'mime-types';
*/
async function createExpressServer() {
  const app = express()
  console.log("dirname: ", __dirname)
  const artifact_path = path.join(__dirname, '../dist')
  console.log("artifact path: ", artifact_path)
  app.use(express.static(path.join(__dirname, '../dist'))) //all file requests from browser to server will look in this static directory
  app.use(express.json())
  app.use(express.urlencoded({extended: true}));

  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: { host: 'localhost', port: 5173 } },
    appType: 'custom'
  })
  // When the server restarts (for example after the user modifies
  // vite.config.js), `vite.middlewares` is still going to be the same
  // reference (with a new internal stack of Vite and plugin-injected
  // middlewares). The following is valid even after restarts.


  //for fetching minified JS/CSS files

  /*
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
        next()
      }
    } else {
      next()
    }
    //next()

  });
  */


  app.get('/favicon.ico', async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../dist/favicon.ico'))
  })

  app.get('/', async (req, res, next) => {
    console.log("run default endpoint")
    
    try {
      // 1. Read index.html
      const template = await fs.readFile(path.join(artifact_path, 'index.html'), { "encoding" : 'utf-8' } )
      const render = (await vite.ssrLoadModule(path.join(__dirname, '../src/entry-server.tsx') )).render
      const { reactContent } = await render()
      console.log("appHtml: ", reactContent)
      console.log("template: ", template)
      const html = template.replace('<!--reactContent -->', reactContent)
      // 5. Inject the app-rendered HTML into the template.

      // 6. Send the rendered HTML back.
      res.status(200).send(html)
    } catch (e) {
      console.log("Error: ", e)
      // If an error is caught, let Vite fix the stack trace so it maps back
      // to your actual source code.
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  //seems kind of dumb to use SSR for each resource endpoint, if the point is for SEO
  app.get('/about', async (req, res) => {

    console.log("run about endpoint")

    try {

      // 1. Read index.html
      console.log("path to read: ", path.join(artifact_path, 'index.html'))
      let template = await fs.readFile(path.join(artifact_path, 'index.html'), { encoding : 'utf-8' }  )
      console.log("template: ", template)
      const render = (await vite.ssrLoadModule(path.join(artifact_path, '../src/entry-server.tsx')))
      const { reactContent } = await render.render()
      const { about } = await render.renderAbout()
      console.log("appHtml: ", reactContent)
      console.log("template: ", template)
      const html = template.replace('<!--reactContent -->', reactContent)
      const html2 = html.replace('<!--aboutContent -->', about)
      // 5. Inject the app-rendered HTML into the template.
      console.log("Final html: ", html2)
      // 6. Send the rendered HTML back.
      res.status(200).send(html2)
    } catch (e) {
      console.log("Error: ", e)
      // If an error is caught, let Vite fix the stack trace so it maps back
      // to your actual source code.
      vite.ssrFixStacktrace(e)
    }
  })

  app.get('/resume', async (req, res) => {
    console.log("run resume endpoint")
    
    try {
      // 1. Read index.html
      let template = await fs.readFile(path.join(artifact_path, 'index.html'), { encoding : 'utf-8' }  )
      const render = (await vite.ssrLoadModule(path.join(__dirname, '../src/resume-ssr.tsx') ))
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

    app.listen(port, () => console.log(`Connected to port ${port}`))

  }

  createExpressServer()