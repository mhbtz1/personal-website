console.log("Running entry-client.tsx")

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.hydrateRoot(document.getElementById('root')!, <App/> );
// createRoot does not work here (does not render the sidebar... )