import Image from 'next/image'
import React from 'react'
import ankara from '@/img/city/ankara.jpg'
import antalya from '@/img/city/antalya.jpg'
import istanbul from '@/img/city/istanbul.jpg'
import izmir from '@/img/city/izmir.jpg'

function Cities() {
    return (
        <div className='px-4 sm:px-40 mt-16'>
            <h1 className='text-3xl font-bold text-black text-center'>Find us in these cities and many more!</h1>
            <div className='flex flex-wrap justify-center lg:justify-between gap-6 mt-6 items-center'>
                <div className='relative w-[310px] h-[220px] rounded-lg overflow-hidden shadow-lg  '>
                    <Image src={izmir} alt="banner" fill className=' object-cover  transition-transform duration-300 hover:scale-110' />
                    <span className="absolute bottom-2 left-2 bg-white text-black text-lg 
                    font-medium px-4 py-2 rounded-lg shadow">Izmir</span>
                </div>
                <div className='relative w-[310px] h-[220px] rounded-lg overflow-hidden shadow-lg  '>
                    <Image src={istanbul} alt="banner" fill className=' object-cover transition-transform duration-300 hover:scale-110' />
                    <span className="absolute bottom-2 left-2 bg-white text-black text-lg 
                    font-medium px-4 py-2 rounded-lg shadow">Istanbul</span>
                </div>
                <div className='relative w-[310px] h-[220px] rounded-lg overflow-hidden shadow-lg  '>
                    <Image src={ankara} alt="banner" fill className=' object-cover transition-transform duration-300 hover:scale-110' />
                    <span className="absolute bottom-2 left-2 bg-white text-black text-lg 
                    font-medium px-4 py-2 rounded-lg shadow">Ankara</span>
                </div>
                <div className='relative w-[310px] h-[220px] rounded-lg overflow-hidden shadow-lg  '>
                    <Image src={antalya} alt="banner" fill className=' object-cover transition-transform duration-300 hover:scale-110' />
                    <span className="absolute bottom-2 left-2 bg-white text-black text-lg 
                    font-medium px-4 py-2 rounded-lg shadow">Antalya</span>
                </div>
            </div>
        </div>
    )
}

export default Cities