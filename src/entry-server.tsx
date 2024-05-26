import ReactDOMServer from 'react-dom/server';
import App from './App.tsx'
import AboutPage from './components/AboutPage.tsx'
import Resume from './components/Resume.tsx'
import { StaticRouter } from 'react-router-dom/server';

export function render(url : string) {
    const reactContent = ReactDOMServer.renderToString(
        <StaticRouter location={url}> <App /> </StaticRouter>)
    return { reactContent } 
}

export function renderAbout(url : string) {
    const about = ReactDOMServer.renderToString(
        <StaticRouter location={url}> <AboutPage /> </StaticRouter>
    )
    return { about }
}

export function renderResume(url : string) {
    const resume = ReactDOMServer.renderToString(
        <StaticRouter location={url}> 
            <Resume />
        </StaticRouter>
    )
    return { resume }
}