//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './css/App.css'
import './css/AboutPage.css'
import './css/Resume.css'
import Sidebar from './Sidebar'

console.log("Importing App.tsx...")

function App() {

  //todo: make sure main-content fetches content from the GET /about endpoint by default
  return <div> 
            <div className='app'> <Sidebar/> </div>
        </div>
}
export default App
