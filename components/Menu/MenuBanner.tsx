import React from 'react'
import Image from 'next/image'
import foodplate from '@/img/foodplate.jpeg'
import { Button } from 'antd'

function MenuBanner() {
    return (
        <div className='pt-12 pb-8 '>
            <div className='relative w-full h-[500px] overflow-hidden  '>
                <Image src={foodplate} alt="banner" className='absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[1024px]  h-full object-cover brightness-[65%]' />

                <div className="absolute xl:max-w-md inset-0 flex flex-col justify-center items-center text-center xl:items-start xl:justify-start xl:text-left xl:pt-16 ">
                    <h1 className='text-2xl lg:text-4xl font-bold xl:text-left text-white text-center xl:text-black '> <span className='text-[#e21b70]'> Fresh </span>food delivery at your door</h1>
                    <Button type='primary' size='large' className='w-max text-white bg-[#e21b70] rounded-lg mt-4 px-4 py-2'>Order Now</Button>
                </div>

                <div className='absolute lg:top-[60%]  bottom-0  flex flex-col justify-center items-center    '>
                    <div className='flex flex-wrap bg-white p-4 rounded-md gap-4 mt-4 shadow-lg items-center  '>
                        <div className='flex gap-4'>
                            <div className="input-container w-[450px] relative">
                                <input
                                    type="text"
                                    className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                                    placeholder=""
                                />
                                <label className='label absolute top-2 left-2 flex bg-white text-[#999] transition-all duration-200 ease-in-out
                                pointer-events-none items-center px-1 gap-2 '>Search food </label>
                            </div>
                            <Button type='primary' className='text-white bg-[#e21b70] w-[80px] h-[40px]'>Search</Button>
                        </div>
                        <div className='flex gap-4'>
                            <select id="category-dropdown" defaultValue="select-category" className='text-black bg-white border-2 border-solid rounded-md px-4 py-2'>
                                <option value="select-category" disabled>Select a category</option>
                                <option value="" >Pizza</option>
                                <option value="">Dessert</option>
                                <option value="">Burger</option>
                                <option value="">Chicken</option>
                            </select>
                            <Button type='primary' className='text-white bg-[#e21b70] w-[80px] h-[40px]'>Search</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBanner