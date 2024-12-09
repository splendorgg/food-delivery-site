import React from 'react'
import FoodCard from './FoodCard'
import mockData from './Mockdata'


function AllRestaurants() {
    return (
        <div className=''>
            <h2 className='text-xl font-bold xl:text-left text-center'>All Restaurants</h2>
            <div className='flex sm:gap-2 lg:gap-4 justify-center xl:justify-between py-4 flex-wrap '>
                {[...Array(5)].map((_, index) => (
                    mockData.map((item) => (
                        <FoodCard key={`${item.id}-${index}`} item={item} />
                    ))
                ))}
            </div>
        </div>

    )
}

export default AllRestaurants