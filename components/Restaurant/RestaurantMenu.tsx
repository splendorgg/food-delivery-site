import React from 'react'
import RestaurantFoodCard from './RestaurantFoodCard'
type Item = {
    id: number;
    name: string;
    price: number;
    description: string;
};

type RestaurantMenuProps = {
    items: Item[];
};
async function RestaurantMenu({ items }: RestaurantMenuProps) {

    return (
        <div className='mt-2'>
            <div >
                <h2 className='text-2xl font-bold'>Popular Items</h2>
                <p className='text-gray-600'>The most commonly ordered items and dishes from this store</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 py-4">
                {items.map((item) => (
                    <RestaurantFoodCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu