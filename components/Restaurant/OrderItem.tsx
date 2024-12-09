'use client'
import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from 'next/image'
type ItemContext = {
    item: { id: number; name: string; price: number; quantity: number, photo: string, };
    incrementItem: (id: number) => void;
    decrementItem: (id: number) => void;
    removeFromCart: (id: number) => void;
}

function OrderItem({ item, incrementItem, decrementItem, }: ItemContext) {

    return (
        <div className='my-4 py-2 '>
            <div className='flex gap-4'>
                <div className="h-12 w-12 overflow-hidden  rounded-lg flex-shrink-0">
                    <Image src={item.photo} width={48} height={48} alt="food" className='object-cover w-full h-full' />
                </div>
                <div className='flex flex-1 flex-col'>
                    <div>{item.name}</div>
                    <div className='flex flex-1 items-center'>
                        <div>{item.price} $</div>
                        <div className='flex ml-auto items-center gap-4 border-2 border-gray-400 px-1 py-1 rounded-2xl text-sm'>
                            <FaMinus onClick={() => decrementItem(item.id)} className='cursor-pointer hover:bg-gray-300 rounded-full' /> {item.quantity} <FaPlus onClick={() => incrementItem(item.id)} className='cursor-pointer hover:bg-gray-300 rounded-full' />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default OrderItem