import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import UserPage from './Pages/UserPage';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route  path="/home" element={<UserPage/>} />
      </Routes>
         
    </BrowserRouter>
   
  )
}

export default AppRoutes