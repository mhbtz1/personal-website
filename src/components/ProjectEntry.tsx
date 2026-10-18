import type { Project } from '../data/projects'
import '../css/entries.css'

export default function ProjectEntry({ project }: { project: Project }) {
  const primary = project.links[0]

  return (
    <li className="entry project" id={project.slug}>
      <div className="entry-head">
        <h2 className="entry-title">
          {primary ? (
            <a className="link" href={primary.href} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h2>
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

      <p className="entry-summary">{project.summary}</p>
    </li>
  )
}
