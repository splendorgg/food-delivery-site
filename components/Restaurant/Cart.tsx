'use client'
import React, { useEffect, useState } from 'react'
import OrderItem from './OrderItem'
import { useCart } from './Context/CartContext';
import { BsCart2 } from "react-icons/bs";


function Cart() {
    const { cartItems, totalCartPrice, incrementItem, decrementItem, removeFromCart } = useCart();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) {
        return (
            <div className=' min-w-[340px] items-center justify-center min-h-[500px] max-h-[calc(100vh-104px)] flex flex-col border-2 border-gray-200 shadow-lg rounded-lg p-5 h-max sticky top-[104px] mt-[80px]'>
                <BsCart2 size={80} />
            </div>
        )
    }
    return (
        <div className=' min-w-[340px] min-h-[500px] max-h-[calc(100vh-104px)] flex flex-col border-2 border-gray-200 shadow-lg rounded-lg p-5 h-max sticky top-[104px] mt-[80px]'>
            <h2 className='mt-2 text-xl '>MY ORDER</h2>
            <div className='overflow-y-auto flex-1'>
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <OrderItem key={item.id} item={item} incrementItem={incrementItem} decrementItem={decrementItem} removeFromCart={removeFromCart} />
                    </div>
                ))}

            </div>
            <div className='mt-auto pt-2 border-t-2'>
                <div className='flex flex-col gap-2 flex-1'>
                    <div className='flex justify-between'>
                        <div className='text-sm '>Subtotal</div>
                        <div className='text-sm ml-auto'>{totalCartPrice.toFixed(2)} $</div>
                    </div>

                </div>
                <div>
                    <button className='w-full bg-[#e21b70] text-white py-2 rounded-lg mt-2 hover:bg-[#bb185f]'>Confirm Order</button>
                </div>
            </div>


        </div>
    )
}

export default Cart