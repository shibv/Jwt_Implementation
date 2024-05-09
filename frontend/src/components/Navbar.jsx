import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-20 bg-blue-200  flex items-center justify-between px-10'>
        <h1 className='text-3xl font-bold'>Navbar</h1>
        <button className='bg-slate-500 p-2 rounded-md'>Logout</button>
    </div>
  )
}

export default Navbar
