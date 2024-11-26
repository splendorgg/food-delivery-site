import React from 'react'
import Image from 'next/image'
import foodplate from '@/img/foodplate.jpg'
import { Button } from 'antd'

function MenuBanner() {
    return (
        <div className=' pt-12 pb-8'>
            <div className='relative w-full h-[500px] overflow-hidden '>
                <Image src={foodplate} alt="banner" className='absolute right-0 top-1/2 transform  h-full object-cover -translate-y-1/2 brightness-[65%]' />

                <div className='absolute left-0 max-w-md mx-auto pt-16  '>
                    <h1 className='text-4xl font-bold text-left text-black '> <span className='text-[#e21b70]'> Fresh </span>food delivery at your door</h1>
                    <Button type='primary' size='large' className='text-white bg-[#e21b70] rounded-lg mt-6 px-4 py-4'>Order Now</Button>
                </div>

                <div className='absolute top-[60%] left-1/2-translate-y-1/2 flex flex-col justify-center items-center    '>
                    <div className='flex bg-white p-4 rounded-md gap-4 mt-4 shadow-lg items-center  '>
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
                        <select id="category-dropdown" className='text-black bg-white border-2 border-solid rounded-md px-4 py-2'>
                            <option value="" disabled selected>Select a category</option>
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
    )
}

export default MenuBanner