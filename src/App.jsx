import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ServicesPage from './pages/Services/ServicesPage'
import ContactPage from './pages/Contact/ContactPage'

import { Suspense } from 'react'
import { lazy } from 'react'

const Footer = lazy(() => import('./components/Footer'))
const Header = lazy(() => import('./components/Header'))
const WidgetChat = lazy(() => import('./components/widgetChat'))

function App() {

  return (
    <>

      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <WidgetChat/>
      </Suspense>

      <Routes>
        <Route path='itmnew2/' element={<HomePage/>}/>
        <Route path='itmnew2/ABOUT' element={<AboutPage/>}/>
        <Route path='itmnew2/SERVICES' element={<ServicesPage/>}/>
        <Route path='itmnew2/CONTACT' element={<ContactPage/>}/>
      </Routes>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer/>
      </Suspense>

    </>
  )
}

export default App
