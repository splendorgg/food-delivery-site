import React from 'react'

function RestaurantCategories() {
    return (
        <>
            <div className=' h-max w-full sticky top-[56px] z-50 bg-[#f7f7f7] border-b-2 border-t-gray-300 '>
                <ul className='style-none flex justify-between group'>
                    {["Popular", "Burger", "Salad", "Pide", "Pizza", "Dessert", "Beverages", "Sides"].map((item) => (
                        <li key={item} className="hover:bg-gray-200 cursor-pointer p-3 rounded-md  hover:underline underline-offset-8 transition-all duration-300">{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default RestaurantCategories