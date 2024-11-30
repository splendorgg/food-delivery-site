import React from 'react'
import { FoodContext } from './FoodContext'

function RestaurantContext({ children }: { children: React.ReactNode }) {
    return (
        <FoodContext>
            {children}
        </FoodContext>
    )
}

export default RestaurantContext