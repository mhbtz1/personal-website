import Seo from '../components/Seo'
import { seoForPath } from '../lib/seo'
import '../css/projects.css'

interface Project {
  slug: string
  title: string
  description: string
  repo: string
  paper?: { title: string; url: string }
}

const PROJECTS: Project[] = [
  {
    slug: 'effectful-prompt-optimizer',
    title: 'Effectful Agent Optimizer',
    description:
      'A tool for optimizing agents using a paradigm for agentic context engineering.',
    repo: 'https://github.com/mhbtz1/effectful-prompt-optimizer',
    paper: { title: 'this paper', url: 'https://arxiv.org/abs/2510.04618' },
  },
  {
    slug: 'rag-search',
    title: 'Multimodal Search Engine',
    description:
      'A multimodal search engine for searching through a dataset of images and text.',
    repo: 'https://github.com/mhbtz1/rag-search',
  },
  {
    slug: 'prompt-optimizer',
    title: 'Prompt Optimizer',
    description: 'A tool for optimizing prompts for a variety of tasks.',
    repo: 'https://github.com/mhbtz1/prompt-optimizer',
  },
  {
    slug: 'duo-attention',
    title: 'VLM-Based DuoAttention Implementation',
    description:
      'An implementation of the DuoAttention architecture using vision-language models.',
    repo: 'https://github.com/mhbtz1/duo-attention',
    paper: { title: 'DuoAttention', url: 'https://arxiv.org/abs/2410.10819' },
  },
]

export default function Projects() {
  return (
    <div className="page">
      <Seo {...seoForPath('/projects')} />

      <h1 className="page-title">Selected Projects</h1>

      <ul className="rule-list">
        {PROJECTS.map((project) => (
          <li key={project.slug} className="project-row">
            {/* The row is not itself a link: it can contain a second link (the
                paper). The title carries the primary action, and the ::after
                overlay makes the whole row clickable without nesting
                interactive elements. */}
            <h2 className="row-title project-title">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.title}
              </a>
            </h2>
            <span className="chrome project-source">GitHub &#8599;</span>

            <p className="row-summary">
              {project.description}
              {project.paper && (
                <>
                  {' '}
                  Implements{' '}
                  <a
                    className="link"
                    href={project.paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.paper.title}
                  </a>
                  .
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
