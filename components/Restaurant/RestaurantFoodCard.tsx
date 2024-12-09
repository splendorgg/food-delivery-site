'use client'
import Image from 'next/image'
import React from 'react'
import burger from '@/img/food/burger.png'
import { FaCirclePlus } from "react-icons/fa6";
import { OrderSelectCard } from './OrderSelectCard';
import { useModal } from './Context/FoodContext';

type Item = { id: number; name: string; price: number; description: string; photoUrl?: string; }

function RestaurantFoodCard({ item }: { item: Item }) {
    const { isModalVisible, handleFoodClick, handleCloseModal, selectedItem } = useModal();

    return (
        <>
            <div onClick={() => handleFoodClick(item)} key={item.id} className='bg-[#f7f7f7] w-full xl:w-[450px] h-[150px] shadow-lg overflow-hidden   hover:bg-red-100  p-3 rounded-xl cursor-pointer flex gap-3 hover:scale-105 transition-transform duration-100 border-2 border-gray-200  '>
                <div className='flex flex-col overflow-hidden  '>
                    <h3 className='text-lg'>{item.name}</h3>
                    <p className='text-[#3b3b3b] text-sm'>${item.price}</p>
                    <p className=' text-[#3b3b3b] text-sm break-words pt-2 line-clamp-2 '>{item.description} </p>

                </div>
                <div className="h-[128px] w-[128px] ml-auto overflow-hidden rounded-lg flex-shrink-0 relative">
                    {item.photoUrl ? (
                        <Image src={item.photoUrl} width={128} height={128} alt="food" className='object-cover w-full h-full' />
                    ) : (
                        <Image src={burger} alt="food" className='object-cover w-full h-full' />
                    )}
                    <span className='absolute bottom-1  rounded-full text-center bg-white right-1  text-3xl  '><FaCirclePlus fill='red' /></span>
                </div>
            </div>

            {isModalVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-10"
                        onClick={handleCloseModal}
                    ></div>
                    <div className="relative z-10 w-full md:w-[70%] lg:w-[1200px]">
                        <OrderSelectCard onClose={handleCloseModal} item={selectedItem ?? { id: 0, name: '', price: 0, description: '' }} />
                    </div>
                </div>
            )}

        </>
    )
}

export default RestaurantFoodCard