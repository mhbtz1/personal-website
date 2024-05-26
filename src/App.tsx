//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './css/App.css'
import './css/AboutPage.css'
import './css/Resume.css'
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar'
import AboutPage from './components/AboutPage'
import Resume from './components/Resume';

console.log("Importing App.tsx...")

function App() {

  //todo: make sure main-content fetches content from the GET /about endpoint by default
  return <Routes>
        <Route path='/' element= { <div className='app'> <Sidebar/> </div> }/>
        <Route path='/about' element = { <div className='app'> <Sidebar/> <AboutPage/> </div> } />
        <Route path='/resume' element= { <div> <Resume/> </div> } />
      </Routes>
}
export default App
