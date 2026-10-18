import { STATUS_LABEL, type Project } from '../data/projects'
import '../css/entries.css'

export default function ProjectEntry({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const primary = project.links[0]

  return (
    <li className="entry project" id={project.slug}>
      <div className="entry-head">
        <Heading className="entry-title">
          {primary ? (
            <a className="link" href={primary.href} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </Heading>
        <span className="chrome entry-meta">
          <span>{project.year}</span>
          <span className={project.status === 'active' ? 'entry-status--active' : undefined}>
            {STATUS_LABEL[project.status]}
          </span>
        </span>
      </div>

      <p className="entry-summary">{project.summary}</p>

      {project.result && (
        <p className="entry-result">
          <span className="chrome entry-label">Result</span>
          {project.result}
        </p>
      )}

      <div className="entry-foot">
        <span className="entry-stack">{project.stack.join(' · ')}</span>
        {project.links.length > 0 && (
          <span className="entry-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                className="chrome"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} &#8599;
              </a>
            ))}
          </span>
        )}
      </div>
    </li>
  )
}
