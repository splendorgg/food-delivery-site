import React from 'react'

function page() {
  return (
    <div className='flex bg-white items-center justify-center min-h-screen'>
      <div className='bg-white max-w-[400px] p-8 flex flex-col shadow-lg rounded-lg  items-center'>
        <form action="" className='flex flex-col gap-4'>
          <h2>Sign up</h2>
          <div>
            <div className="input-container  relative">
              <input
                type="text"
                className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                placeholder=""
              />
              <label className='label absolute top-2 left-2 flex bg-white text-[#999] transition-all duration-200 ease-in-out
                pointer-events-none items-center px-1 gap-2 '>Name </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page