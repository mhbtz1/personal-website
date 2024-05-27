
import ReactDOMServer from 'react-dom/server';
import Resume from './components/Resume'
import React from 'react';


export function renderResume() {
    const resume = ReactDOMServer.renderToString(
        <React.StrictMode>
            <Resume />
        </React.StrictMode>
    )
    return { resume }
}