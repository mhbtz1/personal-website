import Seo from '../components/Seo'
import ProjectEntry from '../components/ProjectEntry'
import { seoForPath } from '../lib/seo'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  return (
    <div className="page">
      <Seo {...seoForPath('/projects')} />

      <h1 className="page-title">Projects</h1>

      <ul className="rule-list">
        {PROJECTS.map((project) => (
          <ProjectEntry key={project.slug} project={project} />
        ))}
      </ul>
    </div>
  )
}
