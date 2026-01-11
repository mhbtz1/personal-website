import '../css/Resume.css'
import { useNavigate } from 'react-router-dom';

interface Experience {
  id: number;
  company: string;
  link?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  details: string;
}

function Resume() {
  const navigate = useNavigate();
  const handleExperienceClick = (link: string | undefined) => {
    if (link) {
      window.open(link, '_blank');
    }
  };
  const experiences: Experience[] = [
    {
      id: 1,
      company: 'Bronco AI',
      link: 'https://bronco.ai',
      role: 'Founding Engineer',
      period: 'Jan 2026 - Present',
      location: 'San Francisco, CA',
      description: 'Building AI agents for chip design verification flows',
      technologies: ['TS/JS','Python', 'C++', 'Verilog', 'SystemVerilog'],
      achievements: [
      ]
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
        'Built core tracing / observability infrastructure for the agents platform'
      ],
      technologies: ['Effect.ts', 'React', 'Tanstack', 'Vercel', 'Supabase']
    },
    {
      id: 3,
      company: 'Structify',
      link: 'https://structify.ai',
      role: 'Machine Learning Engineer',
      description: 'Building data pipelines + models for building web agents',
      period: 'Feb 2024 - Sep 2024',
      location: 'New York, NY',
      achievements: [
        "Implemented data pipelines for collecting multimodal text-image data for SFT and DPO datasets for VLMs and scalable recommendation systems utilizing vector, graph, and relational databases",
        "Implemented API endpoints, observability, and general business logic on our Rust backend. Used Python for data collection / augmentation, and adding custom logic to our Python SDK, and other customer specific integrations"
      ],
      technologies: ['Python', 'Rust', 'PostgreSQL', 'Redis', 'Docker', 'AWS']

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
        'Worked on the Koika project writing code for verifying security properties on multiprocessor machines using Coq. Working on  the ATL project formally verifying tensor compilers on C programs in Fall 2024.'
      ],
      technologies: ['Rocq', 'Coq', 'PLT']
    },
    {
      id: 5,
      company: 'Amazon Web Services',
      link: 'https://aws.amazon.com',
      role: "Software Engineer",
      period: 'Jun 2023 - Aug 2023',
      location: 'Cupertino, CA',
      description: 'Working on embedded firmware for baremetal servers',
      achievements: [
        "Worked for AWS Hardware Engineering Services in the BIOS+UEFI Firmware Development team working on optimizing hardware interrupts from CPU-BMC communication over SSIF interface on Intel-based baremetal servers.",
        "Worked with Linux kernel to perform telemetry on hardware interrupts and automate firmware testing, and built API servers / microservices with Docker for data access. Used C, Python, x86 Assembly with embedded Linux, AWS CDK and SQL. Improved data infrastructure and optimized hardware interrupt processing by a 15 percent margin."
      ],
      technologies: ['C', 'Python', 'x86 Assembly', 'Docker', 'AWS CDK', 'SQL']
    },
    {
      id: 6,
      company: 'Cryptoclear',
      role: 'Software Engineer',
      period: 'Jan 2022 - Nov 2022',
      location: 'Boston, MA',
      description: 'Working on a web application for tracking cryptocurrency transactions',
      achievements: [
        "Developed gradient boosting models, hyperparameter tuning methods and bagging classifiers in model construction. Used Apache Spark and Parquet for data engineering and developing ETL pipelines to aid with inference and building training datasets. Used Go-Ethereum for fetching blockchain data and other Web3 technologies."
      ],
      technologies: ['C++', 'Python', 'PySpark', 'Apache Parquet', 'Go-Ethereum']
    }
  ];

  const education: Education[] = [
    {
      id: 1,
      institution: 'Massachusetts Institute of Technology',
      degree: 'BSc. in Computer Science & Engineering, BSc. in Mathematics',
      period: '2021-2025',
      details: 'Relevant Courses: Operating Systems Engineering (6.1810), Computer Architecture (6.1910), Theory of Computation (18.4041), TinyML and Efficient Deep Learning Computing (6.5940), Inference and Information (6.7800)'
    }
  ];

  const handleDownloadPDF = () => {
    window.open('/Matthew_Habtezgi.pdf', '_blank');
  };

  return (
    <div className="resume-container" onClick={
      () => handleExperienceClick(experiences[0].link)
    }>
      {/* Header with Download Button */}
      <div className="resume-header">
        <div>
          <h1 className="resume-title">Experience & Education</h1>
          <p className="resume-subtitle">Building elegant solutions to complex problems</p>
        </div>
        <button className="download-pdf-button" onClick={handleDownloadPDF}>
          {/* eye icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          View PDF Resume
        </button>
      </div>

      {/* Education Section */}
      <section className="resume-section">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="card-header">
                <div>
                  <h3 className="institution-name">{edu.institution}</h3>
                  <p className="degree-title">{edu.degree}</p>
                </div>
                <span className="period">{edu.period}</span>
              </div>
              <p className="education-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="resume-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card" onClick={() => handleExperienceClick(exp.link)}>
              <div className="card-header">
                <div>
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="role-title">{exp.role}</p>
                </div>
                <div className="card-meta">
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              
              <p className="description">{exp.description}</p>
              
              <div className="achievements">
                <h4 className="achievements-title">Key Achievements</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="technologies">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Resume