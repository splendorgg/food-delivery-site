import React from 'react'
import RestaurantFoodCard from './RestaurantFoodCard'

function RestaurantMenu() {
    return (
        <div className=' mt-2 '>
            <div >
                <h2 className='text-2xl font-bold'>Popular Items</h2>
                <p className='text-gray-600'>The most commonly ordered items and dishes from this store</p>
            </div>

            <div className='flex flex-wrap  gap-4 py-4'>
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
                <RestaurantFoodCard />
            </div>
        </div>
    )
}

export default RestaurantMenu