import Image from 'next/image'
import React from 'react'
import burger from '@/img/food/burger.png'
import { FaCirclePlus } from "react-icons/fa6";


function RestaurantFoodCard({ onClick }:any) {
    return (
        <>
            <div  onClick={onClick} className='bg-[#f7f7f7]   sm:w-[48%] lg:w-[32%] shadow-lg overflow-hidden w-max flex-grow basis-[456px] hover:bg-red-100  p-3 rounded-xl cursor-pointer flex gap-3 hover:scale-105 transition-transform duration-100 border-2 border-gray-200  '>
                <div className='flex flex-col flex-grow min-w-0  '>
                    <h3 className='text-lg'>Burger</h3>
                    <p className='text-[#3b3b3b] text-sm'>$2.99</p>
                    <p className=' text-[#3b3b3b] text-sm  pt-2 line-clamp-3'>160g beef patty topped with fresh lettuce, tomato, melted cheddar, and a special sauce </p>

                </div>
                <div className="h-[128px] w-[128px] overflow-hidden rounded-lg flex-shrink-0 relative">
                    <Image src={burger} alt="food" className='object-cover w-full h-full' />
                    <span className='absolute bottom-1  rounded-full text-center bg-white right-1  text-3xl  '><FaCirclePlus fill='red' /></span>
                </div>
            </div>

        </>
    )
}

export default RestaurantFoodCard