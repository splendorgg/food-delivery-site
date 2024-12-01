import Image from 'next/image'
import React from 'react'
import phone from '@/img/smartphone2.png'
import appstore from '@/img/appstoree.jpg'
import playstore from '@/img/playstoree.jpg'


function MobileBanner() {
    return (
        <div className='px-4 sm:px-20 lg:px-40 my-8 sm:my-28 '>
            <div className='bg-[#e21b70] rounded-lg flex flex-wrap lg:flex-nowrap justify-between items-center px-16 relative py-4 sm:py-4 lg:py-0  '>
                <div className=''>
                    <h1 className='text-3xl text-white'>Download now for all your food needs</h1>
                    <p className='mt-4 max-w-lg text-white'>Food, groceries, or anything you need from nearby shops delivered to your door in minutes. Download our app, fill your basket, place your order, and choose to pay online or at your doorstep it is that simple!</p>
                    <div className='flex gap-4 mt-6 '>
                        <div className='shadow-lg rounded-lg'>
                            <Image src={appstore} alt="banner" width={200} height={100} className='rounded-lg cursor-pointer' />
                        </div>
                        <div className='shadow-lg rounded-lg'>
                            <Image src={playstore} alt="banner" width={200} height={100} className='rounded-lg cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 flex justify-center w-full lg:w-auto">
                    <div className="relative w-[250px] h-[300px] sm:w-[300px] sm:h-[360px] lg:w-[300px] lg:h-[400px]">
                        <Image
                            src={phone}
                            alt="Phone"
                            className='transform scale-x-[-1] '
                            fill

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileBanner