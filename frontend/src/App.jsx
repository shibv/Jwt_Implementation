import { useState } from 'react'
import './App.css'
import { Toaster } from "react-hot-toast";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
 

  return (
   <div className='h-screen w-full flex flex-col'>
      <div>
        <Toaster position="top-center"></Toaster>
      </div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
        <Route path="/" element={ <Main /> } />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>

   </div>
  )
}

export default App
