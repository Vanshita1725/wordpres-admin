
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
// src/index.js



createRoot(document.getElementById('root')).render(

 <BrowserRouter>
    <App />
    </BrowserRouter>
)
