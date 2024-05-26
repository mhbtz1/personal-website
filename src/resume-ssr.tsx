
import ReactDOMServer from 'react-dom/server';
import Resume from './components/Resume'
import React from 'react'
import { StaticRouter } from 'react-router-dom/server';


export function renderResume(url : string) {
    const resume = ReactDOMServer.renderToString(
        <StaticRouter location={url}>
            <Resume />
        </StaticRouter>
    )
    return { resume }
}