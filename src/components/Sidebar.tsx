import React from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const endpoint = "https://habtem.onrender.com/resume";
const aboutEndpoint = "https://habtem.onrender.com/about";
const technicalEndpoint = "http://habtem.onrender.com/articles";
const projectEndpoint = "https://habtem.onender.com/projects"
const miscellaneousEndpoint = "https://habtem.onrender.com/miscellaneous"

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
        <img src="./IMG_1295.jpg" alt="Profile" />
      </div>
      <ThemeProvider theme={theme}>
        <nav>
          <Button variant="contained" href={aboutEndpoint}>About</Button>
          <Button variant="contained" href={technicalEndpoint}>Technical Articles</Button>
          <Button variant="contained" href={projectEndpoint}>Projects</Button>
          <Button variant="contained" href={miscellaneousEndpoint}>Miscellaneous</Button>
          <Button variant="contained" href={endpoint}>Resume</Button>
        </nav>
      </ThemeProvider>
    </div>
  );
}

export default Sidebar;