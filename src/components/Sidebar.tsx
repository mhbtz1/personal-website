import "../css/Sidebar.css"


const endpoint = "http://habtem.onrender.com/resume"
const aboutEndpoint = "http://habtem.onrender.com/about"       

function Sidebar() {

    console.log("resume endpoint: ", endpoint)
    console.log("about endpoint: ", aboutEndpoint)
    return <>
            <div className="sidebar">
                <h2>Matthew Habtezgi</h2>
                <div className="sidebar-image">
                    <img src="/IMG_1295.jpg" alt="Profile" />
                </div>
                <ul>
                    <li> <a href={aboutEndpoint} > About </a> </li>
                    <li>Technical Articles</li>
                    <li>Projects</li>
                    <li>Upwork</li>
                    <li>Other</li>
                    <li> <a href= {endpoint} rel="noopener noreferrer"> Resume </a> </li>
                </ul>
            </div>
        </>


}

export default Sidebar;