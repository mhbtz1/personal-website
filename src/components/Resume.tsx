import '../css/Resume.css'

function Resume() {
    return ( <iframe
      src="/MMH-09162024.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"  // Make sure this is in `public/`
      style={{width: '100%', height: '100%'}}
      title="Resume PDF"
    />)
}

export default Resume