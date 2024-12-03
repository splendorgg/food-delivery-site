import React from 'react'
import HotFoodCard from './HotFoodCard';

function HotFood() {
    return (
        <div className='py-8 '>
            <div className=''>
                <h2 className='text-2xl lg:text-left text-center font-bold my-2'>The Hottest Food In Your Area </h2>
                <div className='flex gap-1 lg:gap-4 flex-wrap justify-center lg:justify-between border-t border-gray-300 lg:py-4 '>
                    <HotFoodCard />
                    <HotFoodCard />
                    <HotFoodCard />
                    <HotFoodCard />
                    <HotFoodCard />
                </div>
            </div>
        </div>
    )
}

export default HotFood