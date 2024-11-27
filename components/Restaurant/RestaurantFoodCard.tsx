import Image from 'next/image'
import React from 'react'
import burger from '@/img/food/burger.png'


function RestaurantFoodCard() {
    return (
        <div className='bg-[#f7f7f7] shadow-lg overflow-hidden p-3 rounded-xl cursor-pointer flex gap-3 hover:scale-105 transition-transform duration-300 border-2 border-gray-200  '>
            <div className=' flex-grow max-w-[288px] '>
                <h3 className='text-lg'>Burger</h3>
                <p className='text-[#3b3b3b] text-sm'>$2.99</p>
                <p className=' text-[#3b3b3b] text-sm  pt-2'>160g beef patty topped with fresh lettuce, tomato, melted cheddar, and a special sauce</p>

            </div>
            <div className="h-[128px] overflow-hidden  rounded-lg flex-shrink-0">
                <Image src={burger} alt="food" className='object-cover w-full h-full' />
            </div>

        </div>
    )
}

export default RestaurantFoodCard