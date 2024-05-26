console.log("Running entry-client.tsx")

import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.hydrateRoot(document.getElementById('root')!, <App/>);
