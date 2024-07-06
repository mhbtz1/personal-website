import ReactDOMServer from 'react-dom/server';
import App from './App.tsx'
import AboutPage from './components/AboutPage.tsx'
import Resume from './components/Resume.tsx'
import Article from './components/Articles.tsx'
import React from 'react'

export function render() {
    const reactContent = ReactDOMServer.renderToString(
        <React.StrictMode> <App /> </React.StrictMode>)
    return { reactContent } 
}

export function renderAbout() {
    const about = ReactDOMServer.renderToString(
        <React.StrictMode> <AboutPage /> </React.StrictMode>
    )
    return { about }
}

export function renderResume() {
    const resume = ReactDOMServer.renderToString(
        <React.StrictMode> 
            <Resume />
        </React.StrictMode>
    )
    return { resume }
}

export function renderArticles() {
    const article = ReactDOMServer.renderToString(
        <React.StrictMode>
            <Article/>
        </React.StrictMode>
    )
    return { article }
}

