import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import SectionHeader from '../components/SectionHeader'
import { seoForPath } from '../lib/seo'
import { PROFILE_LINKS } from '../data/profile'
import '../css/entries.css'
import '../css/about.css'

const PRINCIPLES = [
  {
    title: 'Measure before claiming.',
    body: 'Work is tracked as planned, implemented, measured, or verified, and a result is only stated once it has the evidence for its level.',
  },
  {
    title: 'Build the primitive, then read the production system.',
    body: 'Writing the small version from scratch is the fastest way to know what the large one is actually doing.',
  },
  {
    title: 'Report the honest headline.',
    body: 'If encrypted search costs 356× the plaintext at small scale, that is the first number, followed by the asymptotics that justify it.',
  },
  {
    title: 'Correctness is a design input.',
    body: 'Verification, evals, and observability are planned with the system, not added after it fails.',
  },
]

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default function About() {
  return (
    <div className="page">
      <Seo {...seoForPath('/about')} />

      <h1 className="page-title">About</h1>

      <div className="about-intro">
        <p>
          I&rsquo;m a software engineer and researcher in San Francisco. I&rsquo;m a founding engineer at{' '}
          <ExternalLink href="https://bronco.ai">Bronco AI</ExternalLink>, where I build agents that run
          chip-design verification.
        </p>
        <p>
          My work sits where AI meets the parts of the stack that have to be right: hardware, cryptography,
          and the infrastructure models run on. Before Bronco I was a founding engineer at{' '}
          <ExternalLink href="https://14.ai">14.ai</ExternalLink>, building tracing, evals, and integrations
          for an agent platform. Before that I built data pipelines for vision-language models at{' '}
          <ExternalLink href="https://structify.ai">Structify</ExternalLink>, worked on server firmware at
          AWS, and did formal verification of hardware in Coq at MIT CSAIL.
        </p>
        <p>
          Independently, I research private information retrieval over homomorphic encryption and ML
          systems: GPU kernels, collectives, and the measurement behind them. The{' '}
          <Link className="link" to="/projects">
            projects page
          </Link>{' '}
          has the details. I graduated from MIT in 2025 with degrees in computer science and mathematics.
        </p>
      </div>

      <section className="about-section" aria-labelledby="principles-heading">
        <SectionHeader id="principles-heading" title="How I work" />
        <ul className="rule-list">
          {PRINCIPLES.map((principle) => (
            <li key={principle.title} className="about-principle">
              <strong>{principle.title}</strong> {principle.body}
            </li>
          ))}
        </ul>
      </section>

      <section className="about-section" aria-labelledby="contact-heading">
        <SectionHeader id="contact-heading" title="Contact" />
        <p className="about-contact">
          Open to research collaborations, technical advising, and talks on agents for hardware, private
          search, and ML systems.
        </p>
        <ul className="about-links">
          {PROFILE_LINKS.map((link) => (
            <li key={link.href}>
              <a
                className="chrome"
                href={link.href}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
