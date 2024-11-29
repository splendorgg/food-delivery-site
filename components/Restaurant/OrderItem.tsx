'use client'
import React, { useState } from 'react'
import burger from '@/img/food/burger.png'
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from 'next/image'


function OrderItem() {
    const [itemCount, setitemCount] = useState(1)
    const handleCountPlus = () => {
        setitemCount(itemCount + 1)
    }
    const handleCountMinus = () => {
        if (itemCount === 1) {
            return
        } else {
            setitemCount(itemCount - 1)
        }

    }
    return (
        <div className='my-4 py-2 '>
            <div className='flex gap-4'>
                <div className="h-12 w-12 overflow-hidden  rounded-lg flex-shrink-0">
                    <Image src={burger} alt="food" className='object-cover w-full h-full' />
                </div>
                <div className='flex flex-1 flex-col'>
                    <div>Burger</div>
                    <div className='flex flex-1 items-center'>
                        <div>250 TL</div>
                        <div className='flex ml-auto items-center gap-4 border-2 border-gray-400 px-1 py-1 rounded-2xl text-sm'>
                            <FaMinus onClick={handleCountMinus} className='cursor-pointer hover:bg-gray-300 rounded-full' /> {itemCount} <FaPlus onClick={handleCountPlus} className='cursor-pointer hover:bg-gray-300 rounded-full' />
                        </div>
                    </div>
                    <div></div>

                </div>
            </div>

        </div>
    )
}

export default OrderItem