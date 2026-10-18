import Seo from '../components/Seo'
import SectionHeader from '../components/SectionHeader'
import ProjectEntry from '../components/ProjectEntry'
import WritingRow from '../components/WritingRow'
import { seoForPath } from '../lib/seo'
import { CURRENT_FOCUS, PROFILE, PROFILE_LINKS } from '../data/profile'
import { FEATURED_PROJECTS } from '../data/projects'
import { WRITING } from '../data/writing'
import { EXPERIENCE, period } from '../data/experience'
import '../css/entries.css'
import '../css/home.css'

const LATEST_WRITING = 4

/**
 * Inverted pyramid: who and what first, then proof (current work, selected
 * projects), then writing and history. A visitor who reads only the first
 * paragraph still leaves knowing what this person does.
 */
export default function Home() {
  return (
    <div className="page home">
      <Seo {...seoForPath('/')} />

      <section className="home-intro" aria-labelledby="home-name">
        <h1 className="home-name" id="home-name">
          {PROFILE.name}
        </h1>
        <p className="home-thesis">{PROFILE.thesis}</p>
        <p className="home-summary">{PROFILE.summary}</p>
        <ul className="home-links">
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

      <section className="home-section" aria-labelledby="currently-heading">
        <SectionHeader id="currently-heading" title="Currently" />
        <dl className="home-focus">
          {CURRENT_FOCUS.map((item) => (
            <div key={item.label} className="home-focus-row">
              <dt>{item.label}</dt>
              <dd>{item.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="home-section" aria-labelledby="work-heading">
        <SectionHeader id="work-heading" title="Selected work" more={{ to: '/projects', label: 'All projects' }} />
        <ul className="rule-list">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectEntry key={project.slug} project={project} />
          ))}
        </ul>
      </section>

      <section className="home-section" aria-labelledby="writing-heading">
        <SectionHeader id="writing-heading" title="Writing" more={{ to: '/writing', label: 'All writing' }} />
        <ul className="rule-list">
          {WRITING.slice(0, LATEST_WRITING).map((entry) => (
            <WritingRow key={entry.href} entry={entry} />
          ))}
        </ul>
      </section>

      <section className="home-section" aria-labelledby="experience-heading">
        <SectionHeader id="experience-heading" title="Experience" more={{ to: '/resume', label: 'Full resume' }} />
        <ul className="rule-list">
          {EXPERIENCE.map((exp) => (
            <li key={exp.org} className="timeline-row">
              <span className="chrome timeline-period">{period(exp)}</span>
              <span>
                <span className="timeline-org">{exp.org}</span>
                <span className="timeline-role"> &mdash; {exp.role}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
