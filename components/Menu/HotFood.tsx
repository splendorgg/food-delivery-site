import Image from 'next/image'
import React from 'react'
import burger from '@/img/food/burger.png'
import { CiClock2 } from "react-icons/ci";
import { LuDot } from "react-icons/lu";

function HotFood() {
    return (
        <div className='py-8'>
            <div>
                <h2 className='text-2xl font-bold my-2'>The Hottest Food In Your Area </h2>
                <div className='flex justify-between border-t border-gray-300 py-4 '>
                    <div className='bg-white shadow-lg overflow-hidden'>
                        <div className="w-[240px] h-[180px] overflow-hidden hover:scale-105 transition-transform duration-300">
                            <Image src={burger} alt="food" width={240} height={180} className='object-cover w-full h-full' />
                        </div>
                        <div className='relative p-4 '>
                            <div>
                                <h3>Hot Dog</h3>
                                <p>$2.99</p>
                                <div className='flex items-center gap-1 text-sm'><CiClock2 fill='green' /> 20-30 min</div>
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
                    </div>
                    <div className='bg-white shadow-lg'>
                        <div className="w-[240px] h-[180px] overflow-hidden">
                            <Image src={burger} alt="food" className='object-cover w-full h-full' />
                        </div>
                        <div className='relative p-4 '>
                            <div>
                                <h3>Hot Dog</h3>
                                <p>$2.99</p>
                                <div className='flex items-center gap-1 text-sm'><CiClock2 fill='green' /> 20-30 min</div>
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
                    </div>
                    <div className='bg-white shadow-lg'>
                        <div className="w-[240px] h-[180px] overflow-hidden">
                            <Image src={burger} alt="food" className='object-cover w-full h-full' />
                        </div>
                        <div className='relative p-4 '>
                            <div>
                                <h3>Hot Dog</h3>
                                <p>$2.99</p>
                                <div className='flex items-center gap-1 text-sm'><CiClock2 fill='green' /> 20-30 min</div>
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
                    </div>
                    <div className='bg-white shadow-lg'>
                        <div className="w-[240px] h-[180px] overflow-hidden">
                            <Image src={burger} alt="food" className='object-cover w-full h-full' />
                        </div>
                        <div className='relative p-4 '>
                            <div>
                                <h3>Hot Dog</h3>
                                <p>$2.99</p>
                                <div className='flex items-center gap-1 text-sm'><CiClock2 fill='green' /> 20-30 min</div>
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
                    </div>
                    <div className='bg-white shadow-lg'>
                        <div className="w-[240px] h-[180px] overflow-hidden">
                            <Image src={burger} alt="food" className='object-cover w-full h-full' />
                        </div>
                        <div className='relative p-4 '>
                            <div>
                                <h3>Hot Dog</h3>
                                <p>$2.99</p>
                                <div className='flex items-center gap-1 text-sm'><CiClock2 fill='green' /> 20-30 min</div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotFood