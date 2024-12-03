import React from 'react'
import RestaurantFoodCard from './RestaurantFoodCard'
import prisma from '@/lib/db';


async function RestaurantMenu() {
    const items = await prisma.item.findMany()

    return (
        <div className='mt-2'>
            <div >
                <h2 className='text-2xl font-bold'>Popular Items</h2>
                <p className='text-gray-600'>The most commonly ordered items and dishes from this store</p>
            </div>

            <div className='flex flex-wrap justify-center  gap-4 py-4 '>
                <RestaurantFoodCard items={items} />
                <RestaurantFoodCard items={items} />
                <RestaurantFoodCard items={items} />
                <RestaurantFoodCard items={items} />
                <RestaurantFoodCard items={items} />
                <RestaurantFoodCard items={items} />
            </div>
        </div>
    )
}

export default RestaurantMenu