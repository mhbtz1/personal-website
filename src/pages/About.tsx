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
          Hello, I am Matthew Habtezgi. I am a software engineer and researcher interested in
          building performant, low-latency, high-fidelity systems, with a focus on software
          engineering, ML research, and formal methods.
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
