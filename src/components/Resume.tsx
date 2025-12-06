import '../css/Resume.css'

interface Experience {
  id: number;
  company: string;
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
  const experiences: Experience[] = [
    {
      id: 1,
      company: '14.ai',
      role: 'Founding Engineer',
      period: 'Present',
      location: 'Remote',
      description: 'Building AI-powered solutions from the ground up',
      achievements: [
        'Led full-stack development of core platform',
        'Architected scalable infrastructure',
        'Implemented ML model deployment pipeline'
      ],
      technologies: ['React', 'TypeScript', 'Python', 'AWS']
    },
    // Add more experiences here
  ];

  const education: Education[] = [
    {
      id: 1,
      institution: 'Your University',
      degree: 'Computer Science & Mathematics',
      period: '20XX - Present',
      details: 'Focus on software engineering and formal methods'
    }
  ];

  const handleDownloadPDF = () => {
    window.open('/MMH-09162024.pdf', '_blank');
  };

  return (
    <div className="resume-container">
      {/* Header with Download Button */}
      <div className="resume-header">
        <div>
          <h1 className="resume-title">Experience & Education</h1>
          <p className="resume-subtitle">Building elegant solutions to complex problems</p>
        </div>
        <button className="download-pdf-button" onClick={handleDownloadPDF}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download PDF
        </button>
      </div>

      {/* Work Experience Section */}
      <section className="resume-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
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
    </div>
  );
}

export default Resume