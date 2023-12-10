import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import UserPage from './Pages/UserPage';
import AdminPage from './Pages/AdminPage';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route  path="/home" element={<UserPage/>} />
          <Route path = "/admin" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default AppRoutes