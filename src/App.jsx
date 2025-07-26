import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import { Route,Routes, useActionData, useLocation } from 'react-router-dom'
import Footer from './component/Footer'
import AllRoom from './pages/AllRoom'
const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
     { !isOwnerPath && <Navbar/>}

     <div className='mini-h-7[70vh]'>
      
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/rooms' element={<AllRoom/>} />   
        </Routes>
           
     </div>
     <Footer />
      
     
    </div>
  )
}

export default App
