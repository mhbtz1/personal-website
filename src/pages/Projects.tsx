import Seo from '../components/Seo'
import ProjectEntry from '../components/ProjectEntry'
import { seoForPath } from '../lib/seo'
import { PROJECT_AREAS } from '../data/projects'
import '../css/posts.css'
import '../css/projects.css'

export default function Projects() {
  return (
    <div className="page">
      <Seo {...seoForPath('/projects')} />

      <h1 className="page-title">Projects</h1>
      <p className="page-lede">
        Research and engineering projects, grouped by area. Results are stated only where they were
        measured; replications link the paper they reproduce.
      </p>

      <nav className="area-nav" aria-label="Project areas">
        {PROJECT_AREAS.map((area) => (
          <a key={area.id} className="chrome" href={`#${area.id}`}>
            {area.title}
          </a>
        ))}
      </nav>

      {PROJECT_AREAS.map((area) => (
        <section key={area.id} className="area" aria-labelledby={area.id}>
          <h2 className="area-title" id={area.id}>
            {area.title}
          </h2>
          <ul className="rule-list">
            {area.projects.map((project) => (
              <ProjectEntry key={project.slug} project={project} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
