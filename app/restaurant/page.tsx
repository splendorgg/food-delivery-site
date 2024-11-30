import Cart from '@/components/Restaurant/Cart'
import ConfirmMobileView from '@/components/Restaurant/ConfirmMobileView'
import RestaturantContext from '@/components/Restaurant/Context/RestaurantContext'
import RestaturantBanner from '@/components/Restaurant/RestaturantBanner'
import RestaurantCategories from '@/components/Restaurant/RestaurantCategories'
import RestaurantMenu from '@/components/Restaurant/RestaurantMenu'
import React from 'react'

function Page() {

    return (
        <div className='max-w-[1300px] mx-auto px-2'>
            <RestaturantBanner />
            <RestaurantCategories />
            <RestaturantContext>
                <div className='flex gap-4'>
                    <RestaurantMenu />
                    <div className='hidden md:block ml-auto'>
                        <Cart />
                    </div>
                </div>
            </RestaturantContext>
            <ConfirmMobileView />



        </div>
    )
}

export default Page