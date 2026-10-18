export const PROFILE = {
  name: 'Matthew Habtezgi',
  location: 'San Francisco',
  thesis:
    'Software engineer and researcher building performant, low-latency, high-fidelity systems.',
  summary:
    'Interested in software engineering, ML research, and formal methods.',
  resumePdf: '/Matthew_Habtezgi.pdf',
}

export interface ProfileLink {
  label: string
  href: string
}

export const PROFILE_LINKS: ProfileLink[] = [
  { label: 'GitHub', href: 'https://github.com/mhbtz1' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matthew-habtezgi-b4511b1a9/' },
  { label: 'Resume PDF', href: PROFILE.resumePdf },
  { label: 'RSS', href: '/rss.xml' },
]

export interface Focus {
  label: string
  detail: string
}

/** The "Currently" block on the home page. Keep it to what is true this month. */
export const CURRENT_FOCUS: Focus[] = [
  {
    label: 'Bronco AI',
    detail: 'Agents that drive chip-design verification flows in Verilog and SystemVerilog.',
  },
  {
    label: 'Private search',
    detail:
      'A from-scratch RLWE/BFV library in Rust, and an encrypted ranking + retrieval engine built on it.',
  },
  {
    label: 'ML systems',
    detail:
      'CUDA kernels, NCCL collectives, and roofline measurement on RTX 5090s, each tied to a benchmark.',
  },
]
