import Cart from '@/components/Restaurant/Cart'
import ConfirmMobileView from '@/components/Restaurant/ConfirmMobileView'
import Parent from '@/components/Restaurant/Parent'
import RestaturantBanner from '@/components/Restaurant/RestaturantBanner'
import RestaurantCategories from '@/components/Restaurant/RestaurantCategories'
import RestaurantMenu from '@/components/Restaurant/RestaurantMenu'
import React from 'react'

function Page() {

    return (
        <div className='max-w-[1300px] mx-auto px-2'>
            <Parent>
                <RestaturantBanner />
                <RestaurantCategories />
                <div className='flex gap-4'>
                    <RestaurantMenu />
                    <div className='hidden md:block'>
                        <Cart />
                    </div>
                </div>

                <ConfirmMobileView />
            </Parent>



        </div>
    )
}

export default Page