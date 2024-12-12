import React from 'react'
import FoodCard from './FoodCard'
import prisma from '@/lib/db';



async function AllRestaurants({ selectedCategories }) {
    const items = await prisma.menuItem.findMany({
        include: {
            categories: true,
        },
        where: {
            OR: selectedCategories.length > 0 ? [{
                categories: {
                    some: {
                        name: {
                            in: selectedCategories,
                        },
                    },
                },
            }] : undefined,
        }
    });


    return (
        <div className=''>
            <h2 className='text-xl font-bold xl:text-left text-center'>All Restaurants</h2>
            <div className='flex sm:gap-2 lg:gap-4 justify-center xl:justify-start py-4 flex-wrap '>
                {items.map((item) => (
                    <FoodCard key={item.id} item={item} />
                ))}

            </div>
        </div>

    )
}

export default AllRestaurants