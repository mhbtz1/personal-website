import "./css/Sidebar.css"

//const url = "https://habtem.vercel.app"
const localhost = "https://localhost:3000"


function Sidebar() {
    const endpoint = `${localhost}/resume`
    const aboutEndpoint = `${localhost}/about`

    console.log(`endpoint: ${endpoint}`)
    console.log(`aboutEndpoint: ${aboutEndpoint}`)

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