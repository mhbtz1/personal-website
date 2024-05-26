console.log("Running entry-client.tsx")

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrateRoot(document.getElementById('root')!, <BrowserRouter> <App/> </BrowserRouter>);
