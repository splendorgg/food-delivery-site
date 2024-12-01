import React from 'react'
import city from '@/img/city-silhouette.jpg'
import Image from 'next/image'

function DeliveryBanner() {
    return (
        <div className='relative  lg:h-[400px] sm:h-[500px] w-full overflow-hidden'>
            <Image src={city} alt="city" className='absoulte w-full min-h-[400px] lg:h-[400px] sm:h-[500px] object-cover brightness-[80%]' />

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-black gap-4 '>
                <h2 className='text-2xl sm:text-3xl  font-bold text-center '>WE GUARANTEE</h2>
                <h2 className='text-3xl sm:text-5xl font-bold text-center'>30 MINUTES DELIVERY!</h2>
                <p className='text-center font-medium text-m sm:text-lg '>We guarantee fast delivery! If your order doesn&apos;t arrive within 30 minutes, simply reach out to us, and we&apos;ll ensure you receive a full refund, no questions asked.</p>
                <div className='flex justify-center '>
                    <a  className='inline-block bg-red-600 cursor-pointer whitespace-nowrap text-white px-4 py-3 rounded-lg font-bold text-xl hover:bg-red-700 '>CALL:999-999-9999</a>
                </div>
            </div>
        </div>
    )
}

export default DeliveryBanner