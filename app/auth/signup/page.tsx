import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex bg-white items-center justify-center min-h-screen'>
      <div className='bg-white max-w-[400px] basis-[350px] p-8 flex flex-col shadow-2xl rounded-lg  items-center'>
        <form action="" className='flex flex-col gap-4 w-full'>
          <h2 className='text-3xl  mx-auto'>Sign up</h2>
          <div className='flex flex-col gap-4'>
            <div className="input-container  relative">
              <input
                required
                type="text"
                className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                placeholder=""
              />
              <label className='label absolute top-2 left-2 flex bg-white text-[#999] transition-all duration-200 ease-in-out
                pointer-events-none items-center px-1 gap-2 '>Name </label>
            </div>
            <div className="input-container  relative">
              <input
                required
                type="email"
                className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                placeholder=""
              />
              <label className='label absolute top-2 left-2 flex bg-white text-[#999] transition-all duration-200 ease-in-out
                pointer-events-none items-center px-1 gap-2 '>Email </label>
            </div>
            <div className="input-container  relative">
              <input
                required
                type="password"
                className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                placeholder=""
              />
              <label className='label absolute top-2 left-2 flex bg-white text-[#999] transition-all duration-200 ease-in-out
                pointer-events-none items-center px-1 gap-2 '>Password </label>
            </div>
            <button className='bg-[#e21b70] text-white py-2 rounded-lg hover:bg-[#bb185f]'>Sign Up</button>
            <p className='text-sm text-[#6e6e6e]'>Already have an account? <Link href='/auth/login'> <span className='text-[#e21b70] underline cursor-pointer hover:text-[#bb185f]'>Login</span></Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page