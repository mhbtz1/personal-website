export const PROFILE = {
  name: 'Matthew Habtezgi',
  location: 'San Francisco',
  thesis:
    'I build AI and systems software that has to be correct: agents that verify chip designs, search that never sees your query, and the GPU and distributed infrastructure underneath.',
  summary:
    'Founding engineer at Bronco AI. Independent research on private information retrieval and ML systems. MIT, Computer Science and Mathematics.',
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
