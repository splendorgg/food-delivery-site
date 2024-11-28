import Cart from '@/components/Restaurant/Cart'
import RestaturantBanner from '@/components/Restaurant/RestaturantBanner'
import RestaurantCategories from '@/components/Restaurant/RestaurantCategories'
import RestaurantMenu from '@/components/Restaurant/RestaurantMenu'
import React from 'react'

function page() {
    return (
        <div className='max-w-[1300px] mx-auto px-2'>
            <RestaturantBanner />
            <RestaurantCategories />
            <div className='flex gap-4'>
                <RestaurantMenu />
                <div className='hidden md:block'>
                    <Cart />
                </div>
            </div>
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md p-4">
                <button className="w-full bg-[#e21b70] text-white p-4 rounded-lg mt-2 hover:bg-[#bb185f] flex  items-center ">
                    <div className='text-center flex-grow'>
                        Confirm Order
                    </div>
                    <div className='ml-auto  pr-4'>
                        250 TL
                    </div>
                </button>
            </div>


        </div>
    )
}

export default page