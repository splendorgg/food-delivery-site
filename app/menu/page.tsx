import AllRestaurants from '@/components/Menu/AllRestaurants'
import HotFood from '@/components/Menu/HotFood'
import MenuBanner from '@/components/Menu/MenuBanner'
import SideBar from '@/components/Menu/SideBar'
import React from 'react'


function page({ searchParams }) {
    const selectedCategories = searchParams?.categories
        ? Array.isArray(searchParams.categories)
            ? searchParams.categories : [searchParams.categories] : [];
    return (
        <div className='px-4 sm:px-4 2xl:px-40 '>
            <MenuBanner />
            <HotFood />
            <div>
                <div className='flex gap-4 mb-4 '>
                    <div className='w-1/6 border-2 shadow-lg rounded-lg p-5 h-max sticky top-[56px] hidden xl:block'>
                        <SideBar selectedCategories={selectedCategories} />
                    </div>
                    <div className='flex-1  '>
                        <AllRestaurants selectedCategories={selectedCategories} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page