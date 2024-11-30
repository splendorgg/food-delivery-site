import Image from 'next/image'
import React from 'react'
import burger from '@/img/food/burger.png'
import { Checkbox } from 'antd';
import { FaMinus, FaPlus } from "react-icons/fa6";

type Item = { id: number; name: string; price: number; description: string }
export function OrderSelectCard({ item, onClose }: { item: Item, onClose: () => void }) {

    const options = [
        { label: 'Extra Cheese', value: '2.50' },
        { label: 'Extra Onions', value: '3.49' },
        { label: 'Extra Bacon', value: '2.99' },
        { label: 'Extra Sauce', value: '3.99' },
        { label: 'Extra Sauce', value: '3.99' },
        { label: 'Extra Sauce', value: '3.99' },
        { label: 'Extra Sauce', value: '3.99' },
        { label: 'Extra Sauce', value: '3.99' },

    ];
    return (
        <div className="max-w-[1284px] flex mx-auto bg-white rounded-2xl shadow-lg gap-4 max-h-[400px]  ">
            <div className='min-w-[640px] h-[400px] overflow-hidden rounded-l-lg'>
                <Image src={burger} alt="food" className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col flex-grow min-w-0 p-2 gap-4 '>
                <div>
                    <div className='flex'>
                        <h3 className='text-lg border-b-2 border-gray-100'>{item.name}</h3>
                        <button onClick={onClose} className='ml-auto bg-gray-200 hover:bg-gray-300 px-2 rounded-full'>x</button>
                    </div>
                    {/* <p className=' text-[#3b3b3b] text-sm  pt-2 line-clamp-3'>160g beef patty topped with fresh lettuce, tomato, melted cheddar, and a special sauce </p> */}
                    <p className=' text-[#3b3b3b] text-sm  pt-2 line-clamp-3'>{item.description} </p>
                </div>
                <div className='bg-gray-200 bg-opacity-45 py-2 px-2'>
                    <h3 className='font-bold ' >Extras</h3>
                    <p className='text-sm text-gray-600'>You can add extra choices from below</p>
                </div>
                <div className='overflow-y-auto max-h-[130px]'>
                    {options.map((option) => (
                        <div className='flex py-1' key={option.value} >
                            <div>
                                <Checkbox style={{ wordSpacing: "1px" }} >{option.label}</Checkbox>
                            </div>
                            <div className='ml-auto pr-2 text-gray-600 text-sm'>
                                + {option.value} $
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-auto py-2 pt-3 flex gap-8 items-center  border-t-2 border-gray-100'>
                    <div className='flex gap-2 items-center shadow-lg  '>
                        <div>
                            <FaMinus className='cursor-pointer bg-gray-300 hover:bg-gray-400 p-2 text-3xl' />
                        </div>
                        <div className='px-2 '>
                            1
                        </div>
                        <div>
                            <FaPlus className='cursor-pointer bg-gray-300 hover:bg-gray-400 p-2 text-3xl' />
                        </div>
                    </div>
                    <div className='flex ml-auto w-full h-full shadow-lg items-center justify-center text-white bg-[#3b971e] cursor-pointer hover:bg-[#338817]'>
                        <div className='mr-auto p-2  '>
                            Add to Order
                        </div>
                        <div className='ml-auto bg-[#338817] p-2 '>
                            ${item.price}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

