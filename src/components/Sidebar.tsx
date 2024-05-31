import "../css/Sidebar.css"
import { Button } from '@mui/material'

const endpoint = "https://habtem.onrender.com/resume"
const aboutEndpoint = "https://habtem.onrender.com/about"       

function Sidebar() {

    console.log("resume endpoint: ", endpoint)
    console.log("about endpoint: ", aboutEndpoint)

    const listStyles = {
        'font-size' : '13px',
    }

    return <>
            <div className="sidebar">
                <h2>Matthew Habtezgi</h2>
                <div className="sidebar-image">
                    <img src="/IMG_1295.jpg" alt="Profile" />
                </div>
                <ul>
                    <li> <Button color="white" variant="contained" href={aboutEndpoint} style={{'width' : '200px', 'height': '20px'}}> <p style={listStyles}> About </p> </Button> </li>
                    <li> <Button color="white" variant="contained" style={{'width': '200px', 'height' : '20px'}}> <p style={listStyles}> Technical Articles </p> </Button> </li>
                    <li> <Button color="white" variant="contained" style={{'width' : '200px', 'height': '20px'}}> <p style={listStyles}> Projects</p> </Button> </li>
                    <li> <Button color="white" variant="contained" style={{'width' : '200px', 'height' : '20px'}}> <p style={listStyles}> Upwork </p> </Button> </li>
                    <li> <Button color="white" variant="contained" style={{'width' : '200px', 'height' : '20px'}}> <p style={listStyles}> Other </p> </Button> </li>
                    <li> <Button color="white" variant="contained" href={endpoint} style={{'width' : '200px', 'height' : '20px'}}> <p style={listStyles}> Resume </p> </Button> </li>
                </ul>
            </div>
        </>

}

export default Sidebar;