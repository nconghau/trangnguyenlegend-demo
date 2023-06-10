import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Lib/css/app.css'
import './Lib/css/_app.css'

import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
