import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Main() {
  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      const res = await axios.get("http://localhost:3000/api/logout");
      if(res.status === 200) {
        toast.success(res.data.message)
        navigate("/login")
      }
    } catch (error) {
      toast.error(error.message)
    }
  
  }
  

  return (
    <div className='w-full h-full text-2xl flex justify-center items-center'>
        Welcome to Main page !! <button onClick={handleLogout} className='bg-blue-300 hover:bg-blue-400 hover:scale-105 transition-all duration-500 p-1 ml-2 text-sm rounded-md'>Logout</button>
    </div>
  )
}

export default Main
