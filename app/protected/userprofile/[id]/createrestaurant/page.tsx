import AddRestaurant from '@/components/UserProfile/AddRestaurant'
import React from 'react'

function page({ params }: { params: { id: string } }) {
    const { id } = params
    return (
        <div className='flex flex-col items-center justify-center gap-4 min-h-screen'>
            <div className='flex items-center'>
                <AddRestaurant id={id} />
            </div>
        </div>
    )
}

export default page