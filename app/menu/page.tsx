import AllRestaurants from '@/components/Menu/AllRestaurants'
import HotFood from '@/components/Menu/HotFood'
import MenuBanner from '@/components/Menu/MenuBanner'
import SideBar from '@/components/Menu/SideBar'
import React from 'react'


function page() {
    return (
        <div className='px-4 sm:px-4 2xl:px-40'>
            <MenuBanner />
            <HotFood />
            <div className='flex gap-4  '>
                <div className='w-1/6 border-2 shadow-lg rounded-lg p-5 h-max sticky top-[56px]'>
                    <SideBar />
                </div>
                <div className='flex-1 '>
                    <AllRestaurants />
                </div>
            </div>
        </div>

    )
}

export default page