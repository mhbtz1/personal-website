//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './css/App.css'
import Sidebar from './components/Sidebar'
import '../favicon.ico'
//VERY IMPORTANT TO IMPORT THE CSS FILES HERE SO VITE WILL MINIFY THEM (DO NOT FORGET THIS !!!!!! )

import './css/Sidebar.css'
import './css/AboutPage.css'
import './css/Resume.css'

console.log("Importing App.tsx...")

function App() {

  //todo: make sure main-content fetches content from the GET /about endpoint by default
  return <>
              <Sidebar/>
         </>
}
export default App
