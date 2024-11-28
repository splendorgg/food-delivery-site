import React from 'react'
import OrderItem from './OrderItem'


function Cart() {
    return (
        <div className='min-w-[340px] min-h-[500px] max-h-[calc(100vh-104px)] flex flex-col border-2 border-gray-200 shadow-lg rounded-lg p-5 h-max sticky top-[104px] mt-[80px]'>
            <h2 className='mt-2 text-xl '>MY ORDER</h2>
            <div className='overflow-y-auto flex-1'>
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </div>

            <div className='mt-auto pt-2 border-t-2'>
                <div className='flex flex-col gap-2 flex-1'>
                    <div className='flex justify-between'>
                        <div className='text-sm '>Subtotal</div>
                        <div className='text-sm ml-auto'>250 TL</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-sm'>Delivery</div>
                        <div className='text-sm'>30 TL</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-sm'>Total</div>
                        <div className='text-sm'>280 TL</div>
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