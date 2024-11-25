import React from 'react'
import city from '@/img/city-silhouette.jpg'
import Image from 'next/image'

function DeliveryBanner() {
    return (
        <div className='relative w-full overflow-hidden'>
            <Image src={city} alt="city" className='absoulte w-full h-[400px] object-cover brightness-[80%]' />

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-black gap-4 '>
                <h2 className='text-3xl font-bold '>WE GUARANTEE</h2>
                <h2 className='text-5xl font-bold'>30 MINUTES DELIVERY!</h2>
                <p className='text-center font-medium text-lg '>We guarantee fast delivery! If your order doesn’t arrive within 30 minutes, simply reach out to us, and we’ll ensure you receive a full refund, no questions asked.</p>
                <div className='flex justify-center '>
                    <a href='tel:999-999-9999' className='inline-block bg-red-500 text-white px-4 py-2 rounded-lg '>CALL: 999-999-9999</a>
                </div>
            </div>
        </div>
    )
}

export default DeliveryBanner