import React from 'react'
import burger from '@/img/food/burger.png'
import { CiClock2 } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
import Image from 'next/image';
import Link from 'next/link';

function FoodCard() {
    return (
        <div className='bg-white shadow-lg overflow-hidden mb-6 rounded-xl cursor-pointer'>
            <Link href="/restaurant">
                <div className="w-full h-[350px] xl:w-[240px] xl:h-[180px] overflow-hidden hover:scale-105 transition-transform duration-300">
                    <Image src={burger} alt="food" className='object-cover w-full h-full' />
                </div>
                <div className='relative px-4 py-3 '>
                    <div>
                        <h3 className='text-lg'>Hot Dog</h3>
                        <p className='text-[#3b3b3b] text-sm'>$2.99</p>
                        <div className='flex items-center gap-1 text-[#3b3b3b] text-sm'><CiClock2 fill='green' /> 20-30 min</div>
                    </div>
                    <p className='absolute bottom-4 right-2 bg-[#57b000] text-white rounded-full w-8 h-8 flex 
                            justify-center items-center text-sm font-semibold tracking-tighter'>9.0</p>
                </div>
                <div className='border-t border-gray-300 flex text-xs  items-center text-gray-400 px-3 py-2'>
                    <p>American</p>
                    <LuDot size={20} />
                    <p>Fast Food</p>
                    <LuDot size={20} />
                    <p>Burgers</p>
                </div>
            </Link>
        </div>
    )
}

export default FoodCard