import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

import Footer from './Components/Footer/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Navbar />
    <App />
 
    <Footer />
    </BrowserRouter>
    
  </StrictMode>,
)
