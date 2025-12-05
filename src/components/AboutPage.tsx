import '../css/AboutPage.css'

export function AboutPage() {
    return (
        <div className="about">
            <p className="about-intro">
                Hello, I am Matthew Habtezgi. I am a software engineer and researcher, currently working as a founding engineer at <a href="https://14.ai" target="_blank" rel="noopener noreferrer"> 14.ai</a>.
            </p>
            
            <h2 className="about-section-title">Areas of Interest</h2>
            
            <div className="interest-grid">
                <div className="interest-card">
                    <div className="interest-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                    </div>
                    <h3 className="interest-title">Elegant Software Architecture</h3>
                    <p className="interest-description">Building clean, maintainable, and scalable systems</p>
                </div>

                <div className="interest-card">
                    <div className="interest-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                            <line x1="6" y1="6" x2="6.01" y2="6"></line>
                            <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                    </div>
                    <h3 className="interest-title">Infrastructure & Robust Systems</h3>
                    <p className="interest-description">Designing reliable infrastructure at scale</p>
                </div>

                <div className="interest-card">
                    <div className="interest-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <path d="M2 17l10 5 10-5"></path>
                            <path d="M2 12l10 5 10-5"></path>
                        </svg>
                    </div>
                    <h3 className="interest-title">Product Development</h3>
                    <p className="interest-description">Creating user-centric experiences and solutions</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage