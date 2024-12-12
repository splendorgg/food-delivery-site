import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
import Image from 'next/image';
import Link from 'next/link';

function FoodCard({ item }) {
    return (
        <div className='bg-white shadow-lg overflow-hidden mb-6 rounded-xl cursor-pointer'>
            <Link href="/restaurant/1">
                <div className="w-full h-[350px] xl:w-[240px] xl:h-[180px] overflow-hidden hover:scale-105 transition-transform duration-300">
                    <Image src={item.photoUrl} width={180} height={180} alt="food" className='object-cover w-full h-full' />
                </div>
                <div className='relative px-4 py-3 '>
                    <div>
                        <h3 className='text-lg'>{item.name}</h3>
                        <p className='text-[#3b3b3b] text-sm'>${item.price}</p>
                        <div className='flex items-center gap-1 text-[#3b3b3b] text-sm'><CiClock2 fill='green' /> {item.time} min</div>
                    </div>
                    <p className='absolute bottom-4 right-2 bg-[#57b000] text-white rounded-full w-8 h-8 flex 
                            justify-center items-center text-sm font-semibold tracking-tighter'>9.0</p>
                </div>
                <div className='border-t border-gray-300 flex text-xs  items-center text-gray-400 px-3 py-2'>

                    {item.categories.map((category, index) => (
                        <React.Fragment key={category.id}>
                            <p>{category.name}</p>
                            {index < item.categories.length - 1 && <LuDot size={20} />}
                        </React.Fragment>
                    ))}

                </div>
            </Link>
        </div>
    )
}

export default FoodCard