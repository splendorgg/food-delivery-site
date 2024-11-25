import Image from 'next/image'
import React from 'react'
import phone from '@/img/smartphone.png'
import appstore from '@/img/appstoree.jpg'
import playstore from '@/img/playstoree.jpg'


function MobileBanner() {
    return (
        <div className='px-16 my-28 '>
            <div className='bg-[#e21b70] rounded-lg flex justify-between items-center px-16 relative py-8 '>
                <div className=''>
                    <h1 className='text-3xl'>Download now for all your food needs</h1>
                    <p className='mt-4 max-w-lg'>Food, groceries, or anything you need from nearby shops delivered to your door in minutes. Download our app, fill your basket, place your order, and choose to pay online or at your doorstep it is that simple!</p>
                    <div className='flex gap-4 mt-6 '>
                        <div className='shadow-lg rounded-lg'>
                            <Image src={appstore} alt="banner" width={200} height={100} className='rounded-lg cursor-pointer' />
                        </div>
                        <div className='shadow-lg rounded-lg'>
                            <Image src={playstore} alt="banner" width={200} height={100} className='rounded-lg cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='absolute right-[50px] top-1/2 transform -translate-y-1/2 w-[520px] h-[520px] '>
                    <Image
                        src={phone}
                        alt="Phone"
                        className='transform scale-x-[-1] '
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default MobileBanner