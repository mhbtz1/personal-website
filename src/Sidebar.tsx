import "./css/Sidebar.css"

const url = "https://habtem.netlify.app/.netlify/functions/api"



function Sidebar() {
    const endpoint = `${url}/resume`
    const aboutEndpoint = `${url}/about`
    return <>
        <div className="sidebar">
            <h2>Matthew Habtezgi</h2>
            <div className="sidebar-image">
                <img src="/IMG_1295.jpg" alt="Profile" />
            </div>
            <ul>
                <li> <a href={aboutEndpoint}> About </a> </li>
                <li>Technical Articles</li>
                <li>Projects</li>
                <li>Upwork</li>
                <li>Other</li>
                <li> <a href= {endpoint} > Resume </a> </li>
            </ul>
            </div>
    </>

}

export default Sidebar;