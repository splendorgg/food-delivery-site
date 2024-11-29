import React from 'react'
import { FoodContext } from './FoodContext'

function Parent({ children }: { children: React.ReactNode }) {
    return (
        <FoodContext>
            {children}
        </FoodContext>
    )
}

export default Parent