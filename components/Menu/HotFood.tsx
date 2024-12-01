import React from 'react'
import FoodCard from './FoodCard';

function HotFood() {
    return (
        <div className='py-8 '>
            <div>
                <h2 className='text-2xl font-bold my-2'>The Hottest Food In Your Area </h2>
                <div className='flex flex-wrap justify-between border-t border-gray-300 py-4 '>
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                </div>
            </div>
        </div>
    )
}

export default HotFood