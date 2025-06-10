import React from 'react'
import { Route,Routes, Router } from 'react-router-dom'
import LoginPage from './Register/Vxod'
import RegisterPage from './Register/Register'
import DeliverySection from './Pages/kompany'
import CatalogPage from './Pages/Magazin'
import Catalog from './Pages/Magazin'
import NotFoundPage from './Pages/NotFound'
import DeliveryPage from './Register/Deliver'
import ReviewsPage from './Pages/Otziv'
import TestimonialsPage from './Pages/Otziv'
import FAQ from './Pages/Vopros'
import LogisticsCalculator from './Pages/Kalkulyator'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/Login' element={<LoginPage />} />
      <Route path='/Register' element={<RegisterPage /> }/>
      <Route path='/Kompany' element={<DeliverySection />} />
      <Route path='/Magazin' element={<CatalogPage />} />
      <Route path='/*' element={<NotFoundPage />} />
      <Route path='/Deliver' element={<DeliveryPage />} />
      <Route path='/Otziv' element={<TestimonialsPage />} />
        <Route path='/Vopros'  element={<FAQ />} />
      <Route path='/Calculyator' element={<LogisticsCalculator />}/>
     </Routes>
    </div>
  )
}

export default App

