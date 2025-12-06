import '../css/Projects.css'

interface Project {
    link: string,
    title: string,
    description: string,
    hyperlinkedContent?: { linkName: string, link: string },
}
const projects: Project[] = [
    {
        link: "https://effectful-prompt-optimizer.onrender.com",
        title: "Effectful Agent Optimizer",
        description: "A tool for optimizing agents using a paradigm for agentic context engineering in",
        hyperlinkedContent: { link: "https://arxiv.org/abs/2510.04618", linkName: "this paper." },
    },
    {
        link: "https://github.com/mhbtz1/rag-search",
        title: "Multimodal Search Engine",
        description: "A multimodal search engine for searching through a dataset of images and text linked",
        hyperlinkedContent: { link: "https://github.com/mhbtz1/rag-search", linkName: "here." },
    },
    {
        link: "https://github.com/mhbtz1/prompt-optimizer",
        title: "Prompt Optimizer",
        description: "A tool for optimizing prompts for a variety of tasks linked",
        hyperlinkedContent: { link: "https://github.com/mhbtz1/prompt-optimizer", linkName: "here." },
    },
    {
        link: "https://github.com/mhbtz1/duo-attention",
        title: "Image-Based DuoAttention Implementation",
        description: "An implementation of the DuoAttention architecture for image-based tasks linked",
        hyperlinkedContent: { link: "https://github.com/mhbtz1/duo-attention", linkName: "here." },
    }
]


function Projects(){
    return (<>
    <h2 className="projects-title"> Projects </h2>
    <div className="flex flex-col">
        {projects.map((project) => (
            <div className="interest-grid" onClick={() => window.open(project.link, "_blank")}>
                <div className="interest-card">
                    <div className="interest-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                    </div>
                    <h3 className="interest-title"> { project.title } </h3>
                    <p className="interest-description"> {project.description} {project.hyperlinkedContent && <a href={project.hyperlinkedContent.link} target="_blank" rel="noopener noreferrer"> {project.hyperlinkedContent.linkName} </a>} </p>
                </div>
            </div>
        ))}
        {/*
        <div className="interest-grid" onClick={() => window.open("https://effectful-prompt-optimizer.onrender.com", "_blank")}>
            <div className="interest-card">
                <div className="interest-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                </div>
                <h3 className="interest-title">Effectful Agent Optimizer </h3>
                <p className="interest-description"> A tool for optimizing agents using a paradigm for <a href="https://arxiv.org/abs/2510.04618" target="_blank" rel="noopener noreferrer"> agentic context engineering. </a> </p>
            </div>
        </div>
        */}
    </div>
</>)
}

export default Projects