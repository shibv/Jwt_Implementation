import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


function Register() {
   const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async() => {
      console.log();
     try {
        const response = await axios.post("http://localhost:3000/api/register", {
          name: name,
          email: email,
          password: password
        })
        if(response.status === 200) {
          toast.success(response.data.message)
       
        }
        navigate("/login") // redirect to login div
        
     } catch (error) {
        toast.error(error.message)
     }
    }


  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className=' bg-blue-300 rounded-lg w-[50%] p-6 flex flex-col gap-2' style={{margin: '0 auto'}}>
            <h1 className='text-3xl font-bold'>Register</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='name' className='p-2 rounded-md' />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' className='p-2 rounded-md' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' className='p-2 rounded-md' />
            <button onClick={handleSubmit} className='bg-blue-400 p-2 rounded-md hover:bg-blue-500 hover:scale-105 transition-all duration-500 '>Register</button>
            <p className='text-sm mx-auto '>Do you have an account ? <a className='text-blue-500' href="/login">Login</a></p>
        </div>
    </div>
  )
}

export default Register
