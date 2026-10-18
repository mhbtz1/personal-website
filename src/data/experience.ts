export interface Experience {
  org: string
  link?: string
  role: string
  start: string
  end: string
  location: string
  /** One line of scope: what the team or company does and what you owned. */
  scope: string
  /** Outcome-first bullets. Lead with the verb and the thing built. */
  impact: string[]
  stack: string[]
}

export interface Education {
  institution: string
  degree: string
  start: string
  end: string
  notes?: string
}

export const EXPERIENCE: Experience[] = [
  {
    org: 'Bronco AI',
    link: 'https://bronco.ai',
    role: 'Founding Engineer',
    start: '2026',
    end: 'Present',
    location: 'San Francisco',
    scope: 'AI agents for chip-design verification.',
    impact: [],
    stack: ['Python', 'TypeScript', 'C++', 'SystemVerilog'],
  },
  {
    org: '14.ai',
    link: 'https://14.ai',
    role: 'Founding Engineer',
    start: '2025',
    end: '2026',
    location: 'San Francisco',
    scope: 'Agent platform for customer support, built from zero.',
    impact: [
      'Built the platform’s tracing and observability layer.',
      'Built the eval harnesses used to measure and improve agent quality.',
      'Built MCP, voice-assistant, and document-understanding integrations.',
    ],
    stack: ['Effect.ts', 'React', 'Supabase'],
  },
  {
    org: 'MIT CSAIL',
    link: 'https://www.csail.mit.edu/research/programming-languages-verification',
    role: 'Undergraduate Researcher, Programming Languages & Verification',
    start: '2024',
    end: '2025',
    location: 'Cambridge, MA',
    scope: 'Formal verification of hardware and compilers.',
    impact: [
      'Verified security properties of multiprocessor designs in Kôika, in Coq.',
      'Worked on ATL, verifying tensor-compiler output on C programs.',
    ],
    stack: ['Coq'],
  },
  {
    org: 'Structify',
    link: 'https://structify.ai',
    role: 'Machine Learning Engineer',
    start: '2024',
    end: '2024',
    location: 'New York',
    scope: 'Data and models for web agents.',
    impact: [
      'Built multimodal data pipelines producing SFT and DPO datasets for vision-language models.',
      'Built recommendation systems over vector, graph, and relational databases.',
      'Shipped API endpoints and observability on the Rust backend, and customer integrations in the Python SDK.',
    ],
    stack: ['Python', 'Rust', 'PostgreSQL'],
  },
  {
    org: 'Amazon Web Services',
    link: 'https://aws.amazon.com',
    role: 'Software Engineer, BIOS & UEFI Firmware',
    start: '2023',
    end: '2023',
    location: 'Cupertino',
    scope: 'Firmware for Intel-based bare-metal servers.',
    impact: [
      'Improved CPU–BMC hardware-interrupt processing over SSIF by 15%.',
      'Built Linux kernel telemetry for hardware interrupts and automated firmware testing.',
    ],
    stack: ['C', 'x86 assembly', 'Linux'],
  },
  {
    org: 'Cryptoclear',
    role: 'Software Engineer',
    start: '2022',
    end: '2022',
    location: 'Boston',
    scope: 'Cryptocurrency transaction tracking.',
    impact: [
      'Built Spark ETL pipelines over Ethereum data and gradient-boosted models trained on them.',
    ],
    stack: ['Python', 'PySpark', 'Go-Ethereum'],
  },
]

export const EDUCATION: Education[] = [
  {
    institution: 'Massachusetts Institute of Technology',
    degree: 'B.S. Computer Science & Engineering; B.S. Mathematics',
    start: '2021',
    end: '2025',
  },
]

export function period(entry: { start: string; end: string }): string {
  return entry.start === entry.end ? entry.start : `${entry.start}–${entry.end}`
}
