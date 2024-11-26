import HotFood from '@/components/Menu/HotFood'
import MenuBanner from '@/components/Menu/MenuBanner'
import React from 'react'


function page() {
    return (
        <div className='px-40'>
            <MenuBanner />
            <HotFood />
        </div>

    )
}

export default page