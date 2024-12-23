import Image from 'next/image'
import React, { useState } from 'react'
import { Checkbox } from 'antd';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useCart } from './Context/CartContext';

type Item = { id: number; name: string; price: number; description: string, photoUrl: string }
export function OrderSelectCard({ item, onClose }: { item: Item, onClose: () => void }) {
    const { addToCart } = useCart()
    const [itemCount, setItemCount] = useState(1);
    const [basePrice,] = useState(item.price);
    const [extrasPrice, setExtrasPrice] = useState(0);

    const handleCountPlus = () => {
        setItemCount(itemCount + 1)
    }
    const handleCountMinus = () => {
        if (itemCount === 1) {
            return
        } else {
            setItemCount(itemCount - 1)
        }

    }

    const handleExtraChange = (checked: boolean, extra: { label: string; value: string }) => {
        const extraPrice = parseFloat(extra.value);
        setExtrasPrice((prev) =>
            checked ? parseFloat((prev + extraPrice).toFixed(2)) : parseFloat((prev - extraPrice).toFixed(2))
        );
    };

    const totalPrice = parseFloat(((basePrice + extrasPrice)).toFixed(2));
    const totalShowPrice = parseFloat(((basePrice + extrasPrice) * itemCount).toFixed(2));


    const options = [
        { label: 'Extra Cheese', value: '2.50' },
        { label: 'Extra Onions', value: '3.49' },
        { label: 'Extra Bacon', value: '2.99' },
        { label: 'Extra Sauce', value: '3.99' },
    ];
    return (
        <div className="max-w-[1200px] flex lg:flex-row flex-col  mx-auto bg-white rounded-2xl shadow-lg gap-4 lg:max-h-[400px] w-full  ">
            <div className='w-full lg:w-[640px] h-[300px] lg:h-[400px] overflow-hidden rounded-l-lg relative'>
                <Image src={item.photoUrl} fill alt="food" className='object-cover w-full h-full' />
                <button onClick={onClose} className='absolute right-2 top-2 bg-gray-200 hover:bg-gray-300 px-2 rounded-full lg:hidden'>x</button>
            </div>
            <div className='flex flex-col flex-grow min-w-0 p-2 gap-4 '>
                <div className='overflow-hidden '>
                    <div className='flex'>
                        <h3 className='text-lg border-b-2 border-gray-100'>{item.name}</h3>
                        <button onClick={onClose} className='ml-auto bg-gray-200 hover:bg-gray-300 px-2 rounded-full hidden lg:block'>x</button>
                    </div>
                    <p className=' text-[#3b3b3b] text-sm  pt-2 line-clamp-3 break-words'>{item.description}</p>
                </div>
                <div className='bg-gray-200 bg-opacity-45 py-2 px-2'>
                    <h3 className='font-bold ' >Extras</h3>
                    <p className='text-sm text-gray-600'>You can add extra choices from below</p>
                </div>
                <div className='overflow-y-auto max-h-[130px]'>
                    {options.map((option) => (
                        <div className='flex py-1' key={option.value} >
                            <div>
                                <Checkbox onChange={(e) => handleExtraChange(e.target.checked, option)} style={{ wordSpacing: "1px" }} >{option.label}</Checkbox>
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
                            <FaMinus onClick={handleCountMinus} className='cursor-pointer bg-gray-300 hover:bg-gray-400 p-2 text-3xl' />
                        </div>
                        <div className='px-2 '>
                            {itemCount}
                        </div>
                        <div>
                            <FaPlus onClick={handleCountPlus} className='cursor-pointer bg-gray-300 hover:bg-gray-400 p-2 text-3xl' />
                        </div>
                    </div>
                    <div className='flex select-none  ml-auto w-full h-full shadow-lg items-center justify-center text-white bg-[#3b971e] cursor-pointer hover:bg-[#338817]'>
                        <button onClick={() => addToCart({
                            id: item.id,
                            name: item.name,
                            price: totalPrice,
                            quantity: itemCount,
                            photo: item.photoUrl,
                        }, onClose())} className='mr-auto p-2 w-full' >Add to Order</button>
                        <div className='ml-auto bg-[#338817] p-2 '>
                            ${totalShowPrice}
                        </div>
                    </div>
                </div>

            </div>
        </div>



    )
}

