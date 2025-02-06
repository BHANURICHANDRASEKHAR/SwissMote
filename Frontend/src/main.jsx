import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Context from './Components/Context/Context.jsx'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Context><App /></Context>
    
  </BrowserRouter>,
)
