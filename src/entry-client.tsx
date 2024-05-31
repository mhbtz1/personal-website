console.log("Running entry-client.tsx")

import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.hydrateRoot(document.getElementById('app')!, <App/> );
// createRoot does not work here (does not render the sidebar... )