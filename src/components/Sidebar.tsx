/*
import "../css/Sidebar.css"
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple, yellow } from '@mui/material/colors';

const endpoint = "https://habtem.onrender.com/resume"
const aboutEndpoint = "https://habtem.onrender.com/about"   
const technicalEndpoint = "http://habtem.onrender.com/articles"    

function Sidebar() {

    console.log("resume endpoint: ", endpoint)
    console.log("about endpoint: ", aboutEndpoint)

    const listStyles = {
        'font-size' : '13px',
    }

    const theme = createTheme({
        palette: {
          primary: { main: '#FFFFFF' },
          secondary: { main: '#FFFFFF' }
        },
    });

    return <>
            <div className="sidebar">
                <h2>Matthew Habtezgi</h2>
                <div className="sidebar-image">
                    <img src="/IMG_1295.jpg" alt="Profile" />
                </div>
                <ul>
                    <ThemeProvider theme={theme}>
                        <li> <Button variant="contained" href={aboutEndpoint} style={{'width' : '12vw', 'height': '1.25vw'}}> <p style={listStyles}> About </p> </Button> </li>
                        <li> <Button variant="contained" href={technicalEndpoint} style={{'width': '12vw', 'height' : '1.25vw'}}> <p style={listStyles}> Technical Articles </p> </Button> </li>
                        <li> <Button variant="contained" style={{'width' : '12vw', 'height': '1.25vw'}}> <p style={listStyles}> Projects</p> </Button> </li>
                        <li> <Button variant="contained" style={{'width' : '12vw', 'height' : '1.25vw'}}> <p style={listStyles}> Upwork </p> </Button> </li>
                        <li> <Button variant="contained" style={{'width' : '12vw', 'height' : '1.25vw'}}> <p style={listStyles}> Other </p> </Button> </li>
                        <li> <Button variant="contained" href={endpoint} style={{'width' : '12vw', 'height' : '1.25vw'}}> <p style={listStyles}> Resume </p> </Button> </li>
                    </ThemeProvider>
                </ul>
            </div>
        </>

}

export default Sidebar;
*/


import React from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const endpoint = "https://habtem.onrender.com/resume";
const aboutEndpoint = "https://habtem.onrender.com/about";
const technicalEndpoint = "http://habtem.onrender.com/articles";

function Sidebar() {
  const theme = createTheme({
    palette: {
      primary: { main: '#FFFFFF' },
      secondary: { main: '#FFFFFF' }
    },
  });

  return (
    <div className="sidebar">
      <h2>Matthew Habtezgi</h2>
      <div className="sidebar-image">
        <img src="/IMG_1295.jpg" alt="Profile" />
      </div>
      <ThemeProvider theme={theme}>
        <nav>
          <Button variant="contained" href={aboutEndpoint}>About</Button>
          <Button variant="contained" href={technicalEndpoint}>Technical Articles</Button>
          <Button variant="contained">Projects</Button>
          <Button variant="contained">Upwork</Button>
          <Button variant="contained">Other</Button>
          <Button variant="contained" href={endpoint}>Resume</Button>
        </nav>
      </ThemeProvider>
    </div>
  );
}

export default Sidebar;