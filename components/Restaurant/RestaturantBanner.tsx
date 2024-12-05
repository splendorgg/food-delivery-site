import React from 'react'
import banner from '@/img/Designer.jpeg'
import logo from '@/img/logo.jpeg'
import Image from 'next/image'
import { HiLocationMarker } from "react-icons/hi";
interface restaurantInfo {
    id: number;
    name: string;
    location: string;
    opening: string;
    closing: string;
    userId: number;
}

function RestaturantBanner({ info }: { info: restaurantInfo }) {
    return (
        <div className=''>
            <div className='h-[400px] w-full overflow-hidden relative'>
                <Image src={banner} alt="banner" className='absolute w-full h-full inset-0 object-cover brightness-90 ' />
                <div className='absolute bottom-4 left-4 flex bg-[#f8f5e6] gap-4 items-center rounded-lg'>
                    <div className='h-[100px] w-[100px] overflow-hidden rounded-lg relative'>
                        <Image src={logo} alt="logo" fill className=' object-cover absolute object  ' />
                    </div>
                    <div className='px-4'>
                        <p className='text-2xl font-bold'>{info.name}</p>
                        <p>4 Star</p>
                        <p className='flex gap-1 items-center'><HiLocationMarker />{info.location}</p>
                        <p>Open: {info.opening} -{info.closing}</p>
                    </div>
                </div>
            </div>
            <h3 className='text-2xl py-4 mt-4 '>Available Meals</h3>
        </div>
    )
}

export default RestaturantBanner