import AllRestaurants from '@/components/Menu/AllRestaurants'
import HotFood from '@/components/Menu/HotFood'
import MenuBanner from '@/components/Menu/MenuBanner'
import SideBar from '@/components/Menu/SideBar'
import React from 'react'


function page() {
    return (
        <div className='px-40'>
            <MenuBanner />
            <HotFood />
            <div className='flex gap-4 '>
                <SideBar />
                <AllRestaurants />
            </div>
        </div>

    )
}

export default page