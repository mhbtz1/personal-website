import "../css/Sidebar.css"
//import dotenv from 'dotenv';
//dotenv.config();


const endpoint = "http://habtem.vercel.app/resume"
const aboutEndpoint = "http://habtem.vercel.app/about"       

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