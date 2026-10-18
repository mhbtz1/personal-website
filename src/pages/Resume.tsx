import Seo from '../components/Seo'
import { seoForPath } from '../lib/seo'
import { EDUCATION, EXPERIENCE, period } from '../data/experience'
import { PROFILE } from '../data/profile'
import '../css/resume.css'

/**
 * Experience leads and education closes: for someone working, the most
 * recent role is what a reader came for. Dates sit in a fixed left column so
 * the eye can run down the timeline without reading every entry.
 */
export default function Resume() {
  return (
    <div className="page">
      <Seo {...seoForPath('/resume')} />

      <div className="resume-head">
        <h1 className="page-title">Resume</h1>
        <a className="btn" href={PROFILE.resumePdf} target="_blank" rel="noopener noreferrer">
          PDF &#8599;
        </a>
      </div>

      <section className="resume-section" aria-labelledby="experience-heading">
        <h2 className="chrome resume-section-label" id="experience-heading">
          Experience
        </h2>
        <ol className="resume-timeline">
          {EXPERIENCE.map((exp) => (
            <li key={exp.org} className="resume-entry">
              <div className="resume-when chrome">
                <span>{period(exp)}</span>
                <span>{exp.location}</span>
              </div>

              <div className="resume-what">
                <h3 className="resume-org">
                  {exp.link ? (
                    <a className="link" href={exp.link} target="_blank" rel="noopener noreferrer">
                      {exp.org}
                    </a>
                  ) : (
                    exp.org
                  )}
                </h3>
                <p className="resume-role">{exp.role}</p>
                <p className="resume-scope">{exp.scope}</p>

                {exp.impact.length > 0 && (
                  <ul className="resume-impact">
                    {exp.impact.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}

                <p className="resume-stack">{exp.stack.join(' · ')}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="resume-section" aria-labelledby="education-heading">
        <h2 className="chrome resume-section-label" id="education-heading">
          Education
        </h2>
        <ol className="resume-timeline">
          {EDUCATION.map((edu) => (
            <li key={edu.institution} className="resume-entry">
              <div className="resume-when chrome">
                <span>{period(edu)}</span>
              </div>
              <div className="resume-what">
                <h3 className="resume-org">{edu.institution}</h3>
                <p className="resume-role">{edu.degree}</p>
                {edu.notes && <p className="resume-scope">{edu.notes}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
