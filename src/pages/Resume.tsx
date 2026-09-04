import Seo from '../components/Seo'
import { seoForPath } from '../lib/seo'
import '../css/resume.css'

interface Experience {
  id: number
  company: string
  link?: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

interface Education {
  id: number
  institution: string
  degree: string
  period: string
  courses: string[]
}

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'Bronco AI',
    link: 'https://bronco.ai',
    role: 'Founding Engineer',
    period: 'Jan 2026 - Present',
    location: 'San Francisco, CA',
    description: 'Building AI agents for chip design verification flows',
    achievements: [],
    technologies: ['TS/JS', 'Python', 'C++', 'Verilog', 'SystemVerilog'],
  },
  {
    id: 2,
    company: '14.ai',
    link: 'https://14.ai',
    role: 'Founding Engineer',
    period: 'Sep 2025 - Jan 2026',
    location: 'San Francisco, CA',
    description: 'Building AI-powered solutions from the ground up',
    achievements: [
      'Built core integrations and infrastructure for MCP, Voice Assistants, and document understanding flows',
      'Built eval harnesses for evaluating and improving the performance of the agents platform',
      'Built core tracing / observability infrastructure for the agents platform',
    ],
    technologies: ['Effect.ts', 'React', 'Tanstack', 'Vercel', 'Supabase'],
  },
  {
    id: 3,
    company: 'Structify',
    link: 'https://structify.ai',
    role: 'Machine Learning Engineer',
    period: 'Feb 2024 - Sep 2024',
    location: 'New York, NY',
    description: 'Building data pipelines + models for building web agents',
    achievements: [
      'Implemented data pipelines for collecting multimodal text-image data for SFT and DPO datasets for VLMs and scalable recommendation systems utilizing vector, graph, and relational databases',
      'Implemented API endpoints, observability, and general business logic on our Rust backend. Used Python for data collection / augmentation, and adding custom logic to our Python SDK, and other customer specific integrations',
    ],
    technologies: ['Python', 'Rust', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  },
  {
    id: 4,
    company: 'MIT CSAIL',
    link: 'https://www.csail.mit.edu/research/programming-languages-verification',
    role: 'Undergraduate Researcher',
    period: 'Sep 2024 - Jun 2025',
    location: 'Cambridge, MA',
    description: 'Working on formal verification of software and hardware systems',
    achievements: [
      'Worked on the Koika project writing code for verifying security properties on multiprocessor machines using Coq. Working on the ATL project formally verifying tensor compilers on C programs in Fall 2024.',
    ],
    technologies: ['Rocq', 'Coq', 'PLT'],
  },
  {
    id: 5,
    company: 'Amazon Web Services',
    link: 'https://aws.amazon.com',
    role: 'Software Engineer',
    period: 'Jun 2023 - Aug 2023',
    location: 'Cupertino, CA',
    description: 'Working on embedded firmware for baremetal servers',
    achievements: [
      'Worked for AWS Hardware Engineering Services in the BIOS+UEFI Firmware Development team working on optimizing hardware interrupts from CPU-BMC communication over SSIF interface on Intel-based baremetal servers.',
      'Worked with Linux kernel to perform telemetry on hardware interrupts and automate firmware testing, and built API servers / microservices with Docker for data access. Used C, Python, x86 Assembly with embedded Linux, AWS CDK and SQL. Improved data infrastructure and optimized hardware interrupt processing by a 15 percent margin.',
    ],
    technologies: ['C', 'Python', 'x86 Assembly', 'Docker', 'AWS CDK', 'SQL'],
  },
  {
    id: 6,
    company: 'Cryptoclear',
    role: 'Software Engineer',
    period: 'Jan 2022 - Nov 2022',
    location: 'Boston, MA',
    description: 'Working on a web application for tracking cryptocurrency transactions',
    achievements: [
      'Developed gradient boosting models, hyperparameter tuning methods and bagging classifiers in model construction. Used Apache Spark and Parquet for data engineering and developing ETL pipelines to aid with inference and building training datasets. Used Go-Ethereum for fetching blockchain data and other Web3 technologies.',
    ],
    technologies: ['C++', 'Python', 'PySpark', 'Apache Parquet', 'Go-Ethereum'],
  },
]

const EDUCATION: Education[] = [
  {
    id: 1,
    institution: 'Massachusetts Institute of Technology',
    degree: 'BSc. Computer Science & Engineering, BSc. Mathematics',
    period: '2021 - 2025',
    courses: [
      'Operating Systems Engineering (6.1810)',
      'Computer Architecture (6.1910)',
      'Theory of Computation (18.4041)',
      'TinyML and Efficient Deep Learning Computing (6.5940)',
      'Inference and Information (6.7800)',
    ],
  },
]

export default function Resume() {
  return (
    <div className="page">
      <Seo {...seoForPath('/resume')} />

      <div className="resume-head">
        <h1 className="page-title">Experience &amp; Education</h1>
        <a
          className="btn"
          href="/Matthew_Habtezgi.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF resume &#8599;
        </a>
      </div>

      <section className="resume-section" aria-labelledby="education-heading">
        <h2 className="section-title" id="education-heading">
          Education
        </h2>
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="resume-entry">
            <div className="resume-card-head">
              <div>
                <h3 className="resume-org">{edu.institution}</h3>
                <p className="resume-role">{edu.degree}</p>
              </div>
              <span className="resume-period">{edu.period}</span>
            </div>
            <h4 className="resume-subhead">Relevant coursework</h4>
            <ul className="resume-list">
              {edu.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-section" aria-labelledby="experience-heading">
        <h2 className="section-title" id="experience-heading">
          Work Experience
        </h2>
        <div className="resume-stack">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="resume-entry">
              <div className="resume-card-head">
                <div>
                  <h3 className="resume-org">
                    {exp.link ? (
                      <a
                        className="link"
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <p className="resume-role">{exp.role}</p>
                </div>
                <div className="resume-meta">
                  <span className="resume-period">{exp.period}</span>
                  <span className="resume-location">{exp.location}</span>
                </div>
              </div>

              <p className="resume-description">{exp.description}</p>

              {/* Only render the heading when there is something under it. */}
              {exp.achievements.length > 0 && (
                <>
                  <h4 className="resume-subhead">Key achievements</h4>
                  <ul className="resume-list">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="resume-tech">
                {exp.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
