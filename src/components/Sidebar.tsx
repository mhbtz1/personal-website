import React from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import Article from './Articles';
import Projects from './Projects';
import Miscellaneous from './Miscellaneous';
import Resume from './Resume';

const theme = createTheme({
  palette: {
    primary: { main: '#FFFFFF' },
    secondary: { main: '#FFFFFF' }
  },
});

function Sidebar() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: '250px',
            height: '100vh',
            backgroundColor: '#6b7280', // Tailwind's gray-500
            color: 'white',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h2
            style={{
              fontSize: '1.25rem', // text-xl
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '1rem',
              color: 'black' // fixed typo from `text-blackfont-bold`
            }}
          >
            Matthew Habtezgi
          </h2>
            
          <div style={{ marginBottom: '1rem'}}>
            <img
              src="/IMG_1295.jpg"
              alt="Profile"
              style={{ width: '10rem', height: '10rem', objectFit: 'cover', borderRadius: '1rem'}}
            />
          </div>
            <ThemeProvider theme={theme}>
              <nav
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >

                <div>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/about"
                    style={{ width: '10rem' }}
                  >
                    About
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/articles"
                    style={{ width: '10rem' }}
                  >
                    Technical Articles
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/projects"
                    style={{ width: '10rem' }}
                  >
                    Projects
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/miscellaneous"
                    style={{ width: '10rem' }}
                  >
                    Miscellaneous
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/resume"
                    style={{ width: '10rem' }}
                  >
                    Resume
                  </Button>
                </div>
              </nav>
            </ThemeProvider>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, height: '100%', overflowY: 'auto', padding: '1.5rem' }}>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<Article />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/miscellaneous" element={<Miscellaneous />} />
            <Route path="/resume" element={<div style={{width: '100%', height: '100%' }}><Resume/></div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Sidebar;
