import React from 'react'
import Start from './Pages/Start'
import Home from './Pages/Home'
import {Route, Routes } from 'react-router-dom'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import Captainlogin from './Pages/Captainlogin'
import CaptainSignup from './Pages/CaptainSignup'
import UserProtectWrapper from './Pages/UserProtectWrapper'
import UserLogout from './Pages/UserLogout'
import CaptainHome from './Pages/CaptainHome'
import CaptainProtectWrapper from './Pages/CaptainProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<UserLogin />} /> 
      <Route path='/signup' element={<UserSignup />} /> 
      <Route path='/captain-login' element={<Captainlogin />} /> 
      <Route path='/captain-signup' element={<CaptainSignup />} />

      // User Home Route
      <Route path='/home' element={
       < UserProtectWrapper>
          <Home/>
       </UserProtectWrapper>
        } />  

      // User Logout Route
        <Route path='/userlogout' element={
        < UserProtectWrapper>
            <UserLogout/>
        </UserProtectWrapper>
        } />
        
        // Captain Home Route
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>          
          } />

      </Routes>
      
    </div>
  )
}

export default App
