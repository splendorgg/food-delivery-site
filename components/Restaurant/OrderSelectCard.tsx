import Image from 'next/image'
import React from 'react'
import burger from '@/img/food/burger.png'

function OrderSelectCard() {
    return (
        <div className="w-full flex mx-auto bg-white rounded-2xl shadow-lg gap-4">
            <div className='min-w-[640px] h-[400px] overflow-hidden'>
                <Image src={burger} alt="food" className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col flex-grow min-w-0 p-2 gap-4 '>
                <div>
                    <h3 className='text-lg'>Burger</h3>
                    <p className=' text-[#3b3b3b] text-sm  pt-2 line-clamp-3'>160g beef patty topped with fresh lettuce, tomato, melted cheddar, and a special sauce </p>
                </div>
                <div>
                    <h3>Extras</h3>
                    
                </div>

            </div>
        </div>

    )
}

export default OrderSelectCard