//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './css/App.css'
import Sidebar from './components/Sidebar'
import TestBox from './components/TestBox.tsx'
import '../favicon.ico'
//VERY IMPORTANT TO IMPORT THE CSS FILES HERE SO VITE WILL MINIFY THEM (DO NOT FORGET THIS !!!!!! )
console.log("Importing App.tsx...")

function App() {

  //todo: make sure main-content fetches content from the GET /about endpoint by default
  return <>
            <Sidebar/>
         </>

}
export default App
