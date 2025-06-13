import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes, Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import RegisterPage from './Register/Register.jsx'
import Footer from './Components/Footer/Footer.jsx'
import LoginPage from './Register/Vxod.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
        
   <BrowserRouter>
   <Routes > 
  <Route path='/Login' element={<LoginPage />} />
    <Route path='/Vxod' element={<LoginPage />} />
    </Routes>
   <Navbar />
    <App />
 
    <Footer />
    </BrowserRouter>
    
  </StrictMode>,
)
