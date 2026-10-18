export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  links: ProjectLink[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'secure-search-engine',
    title: 'Encrypted Search Engine',
    summary:
      'Private search on a from-scratch BFV homomorphic encryption library. The server ranks and returns documents without seeing the query.',
    links: [{ label: 'Code', href: 'https://github.com/mhbtz1/bfv-private-search' }],
  },
  {
    slug: 'effectful-prompt-optimizer',
    title: 'Effectful Agent Optimizer',
    summary: 'A tool for optimizing agents using agentic context engineering.',
    links: [
      { label: 'Code', href: 'https://github.com/mhbtz1/effectful-prompt-optimizer' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2510.04618' },
    ],
  },
  {
    slug: 'rag-search',
    title: 'Multimodal Search Engine',
    summary: 'A search engine over a dataset of images and text.',
    links: [{ label: 'Code', href: 'https://github.com/mhbtz1/rag-search' }],
  },
  {
    slug: 'prompt-optimizer',
    title: 'Prompt Optimizer',
    summary: 'A tool for optimizing prompts for a variety of tasks.',
    links: [{ label: 'Code', href: 'https://github.com/mhbtz1/prompt-optimizer' }],
  },
  {
    slug: 'duo-attention',
    title: 'VLM-Based DuoAttention',
    summary: 'An implementation of DuoAttention using vision-language models.',
    links: [
      { label: 'Code', href: 'https://github.com/mhbtz1/duo-attention' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2410.10819' },
    ],
  },
]
