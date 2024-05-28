import "../css/Sidebar.css"


const endpoint = "https://habtem.onrender.com/resume"
const aboutEndpoint = "https://habtem.onrender.com/about"       

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
                    <li> <a href= {endpoint} > Resume </a> </li>
                </ul>
            </div>
        </>

}

export default Sidebar;