export type ProjectStatus = 'active' | 'complete' | 'replication'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  title: string
  year: string
  status: ProjectStatus
  /** One sentence: what it is and how it works. Lead with the noun, not "A tool for". */
  summary: string
  /** Optional measured or verifiable outcome. Never an estimate. */
  result?: string
  stack: string[]
  links: ProjectLink[]
  featured?: boolean
}

export interface ProjectArea {
  id: string
  title: string
  projects: Project[]
}

export const PROJECT_AREAS: ProjectArea[] = [
  {
    id: 'private-search',
    title: 'Private search & cryptography',
    projects: [
      {
        slug: 'secure-search-engine',
        title: 'Encrypted search engine',
        year: '2026',
        status: 'active',
        summary:
          'Two-phase private search on a from-scratch RLWE/BFV implementation: the server ranks documents and returns one without learning the query, the scores, or which document was fetched.',
        result:
          'One-ciphertext query and one-ciphertext response at any corpus size; encrypted ranking in 26 ms on a 16-document corpus (N = 2048). Educational: correctness is tested, security is not yet claimed.',
        stack: ['Rust', 'BFV', 'PIR'],
        links: [],
        featured: true,
      },
    ],
  },
  {
    id: 'ml-systems',
    title: 'ML systems',
    projects: [
      {
        slug: 'ml-systems-lab',
        title: 'ML systems lab',
        year: '2026',
        status: 'active',
        summary:
          'GPU and distributed-training primitives built from scratch, then compared against production frameworks: tiled GEMM, warp-shuffle LayerNorm, CUDA streams and Graphs, NCCL all-reduce cost models.',
        result: 'Roofline characterization measured on Blackwell (sm_120); kernels ship with self-checking tests.',
        stack: ['CUDA', 'NCCL', 'PyTorch'],
        links: [],
        featured: true,
      },
      {
        slug: 'duo-attention',
        title: 'DuoAttention for vision-language models',
        year: '2024',
        status: 'replication',
        summary:
          'Extends DuoAttention’s retrieval/streaming head split, which keeps a full KV cache only for retrieval heads, from text LLMs to VLMs.',
        stack: ['PyTorch', 'KV cache'],
        links: [
          { label: 'Code', href: 'https://github.com/mhbtz1/duo-attention' },
          { label: 'Paper', href: 'https://arxiv.org/abs/2410.10819' },
        ],
      },
      {
        slug: 'decision-transformer',
        title: 'Decision Transformer',
        year: '2024',
        status: 'replication',
        summary: 'Offline RL as return-conditioned sequence modeling, implemented from scratch.',
        stack: ['PyTorch', 'RL'],
        links: [{ label: 'Code', href: 'https://github.com/mhbtz1/decision-transformer' }],
      },
    ],
  },
  {
    id: 'distributed-systems',
    title: 'Distributed systems',
    projects: [
      {
        slug: 'maelstrom-lab',
        title: 'Fault-injected protocol lab',
        year: '2026',
        status: 'active',
        summary:
          'Distributed protocols in Rust behind a single Transport trait, so the same node code runs under Jepsen’s Maelstrom fault injection locally and over TCP on real machines.',
        stack: ['Rust', 'Maelstrom', 'TCP'],
        links: [],
        featured: true,
      },
      {
        slug: 'rdma-examples',
        title: 'One-sided RDMA primitives',
        year: '2026',
        status: 'complete',
        summary:
          'A libibverbs client and server exercising the one-sided READ and WRITE operations FaRM is built on, with the remote CPU idle during data movement.',
        result: 'Verified end to end over SoftRoCE.',
        stack: ['C', 'libibverbs', 'RDMA'],
        links: [],
      },
      {
        slug: 'dht-rs',
        title: 'Raft-replicated hash table',
        year: '2024',
        status: 'complete',
        summary: 'A distributed hash table in Rust using Raft for consensus.',
        stack: ['Rust', 'Raft'],
        links: [{ label: 'Code', href: 'https://github.com/mhbtz1/dht-rs' }],
      },
      {
        slug: 'local-first-sim',
        title: 'Deterministic simulation runner',
        year: '2026',
        status: 'complete',
        summary: 'Runs distributed workers with deterministic replay, so a failing run can be reproduced exactly.',
        stack: ['TypeScript', 'DST'],
        links: [{ label: 'Code', href: 'https://github.com/mhbtz1/local-first-sim' }],
      },
    ],
  },
  {
    id: 'hardware-verification',
    title: 'Hardware & formal verification',
    projects: [
      {
        slug: 'koika',
        title: 'Security proofs for multiprocessor hardware',
        year: '2024–25',
        status: 'complete',
        summary:
          'Coq proofs of security properties for multiprocessor designs written in Kôika, a rule-based hardware description language. MIT CSAIL.',
        stack: ['Coq', 'Kôika'],
        links: [{ label: 'Code', href: 'https://github.com/mhbtz1/koika' }],
        featured: true,
      },
      {
        slug: 'tiny-gpu',
        title: 'Minimal GPU',
        year: '2025',
        status: 'complete',
        summary: 'A minimal GPU in SystemVerilog for proof-of-concept matrix multiplies.',
        stack: ['SystemVerilog'],
        links: [{ label: 'Code', href: 'https://github.com/mhbtz1/bronco-tiny-gpu' }],
      },
    ],
  },
  {
    id: 'applied-ai',
    title: 'Agents & applied AI',
    projects: [
      {
        slug: 'effectful-prompt-optimizer',
        title: 'Agentic context optimizer',
        year: '2025',
        status: 'replication',
        summary:
          'An implementation of Agentic Context Engineering: agents improve by curating an evolving playbook of strategies instead of rewriting a single prompt.',
        stack: ['TypeScript', 'Effect'],
        links: [
          { label: 'Code', href: 'https://github.com/mhbtz1/effectful-prompt-optimizer' },
          { label: 'Paper', href: 'https://arxiv.org/abs/2510.04618' },
        ],
      },
      {
        slug: 'context-free-grammar-evals',
        title: 'Grammar-constrained text-to-SQL evals',
        year: '2025',
        status: 'complete',
        summary: 'An eval harness for text-to-SQL where model output is constrained by a context-free grammar.',
        stack: ['TypeScript', 'Evals'],
        links: [{ label: 'Code', href: 'https://github.com/mhbtz1/context-free-grammar-evals' }],
      },
      {
        slug: 'rag-search',
        title: 'Multimodal retrieval',
        year: '2024',
        status: 'complete',
        summary: 'Retrieval-augmented search over a mixed corpus of images and text.',
        stack: ['Python', 'Embeddings'],
        links: [{ label: 'Code', href: 'https://github.com/mhbtz1/rag-search' }],
      },
    ],
  },
]

export const FEATURED_PROJECTS: Project[] = PROJECT_AREAS.flatMap((area) => area.projects).filter(
  (project) => project.featured,
)

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  active: 'Active',
  complete: 'Complete',
  replication: 'Paper replication',
}
