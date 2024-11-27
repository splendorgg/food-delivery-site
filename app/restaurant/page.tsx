import Cart from '@/components/Restaurant/Cart'
import RestaturantBanner from '@/components/Restaurant/RestaturantBanner'
import RestaurantCategories from '@/components/Restaurant/RestaurantCategories'
import RestaurantMenu from '@/components/Restaurant/RestaurantMenu'
import React from 'react'

function page() {
    return (
        <div className='px-40'>
            <RestaturantBanner />
            <RestaurantCategories />
            <div className='flex gap-4 '>
                <RestaurantMenu />
                <Cart />
            </div>


        </div>
    )
}

export default page