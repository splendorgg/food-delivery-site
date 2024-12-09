import Cart from '@/components/Restaurant/Cart'
import ConfirmMobileView from '@/components/Restaurant/ConfirmMobileView'
import { CartProvider } from '@/components/Restaurant/Context/CartContext'
import RestaturantContext from '@/components/Restaurant/Context/RestaurantContext'
import RestaturantBanner from '@/components/Restaurant/RestaturantBanner'
import RestaurantCategories from '@/components/Restaurant/RestaurantCategories'
import RestaurantMenu from '@/components/Restaurant/RestaurantMenu'
import prisma from '@/lib/db'
import React from 'react'



async function Page({ params }: { params: { id: string } }) {
    const restaurantId = parseInt(params.id)
    const restaurantInfo = await prisma.restaurant.findUnique({
        where: {
            id: restaurantId
        },
        include: {
            items: true,
        }

    })

    if (!restaurantInfo) {
        return (
            <div>
                <h1>Restaurant Not Found</h1>
            </div>
        )
    }

    return (
        <div className='max-w-[1300px] mx-auto px-2'>
            <RestaturantBanner info={restaurantInfo} />
            <RestaurantCategories />
            <CartProvider>
                <RestaturantContext>
                    <div className='flex gap-4'>
                        <RestaurantMenu items={restaurantInfo.items ?? []} />
                        <div className='hidden lg:block ml-auto'>
                            <Cart />
                        </div>
                    </div>
                </RestaturantContext>
                <ConfirmMobileView />
            </CartProvider>



        </div>
    )
}

export default Page