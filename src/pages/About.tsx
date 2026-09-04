import Seo from '../components/Seo'
import { seoForPath } from '../lib/seo'
import '../css/about.css'

export default function About() {
  return (
    <div className="page">
      <Seo {...seoForPath('/about')} />

      <h1 className="page-title">About</h1>

      <div className="about-intro">
        <p>
          Hello, I am Matthew Habtezgi. I am a software engineer and researcher, currently
          working as a founding engineer at{' '}
          <a className="link" href="https://bronco.ai" target="_blank" rel="noopener noreferrer">
            Bronco AI
          </a>
          .
        </p>
        <p>
          I recently graduated from{' '}
          <a
            className="link"
            href="https://www.mit.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT
          </a>
          , and am currently based in the SF Bay Area.
        </p>
      </div>
    </div>
  )
}
