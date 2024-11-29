'use client'
import Cart from '@/components/Restaurant/Cart'
import ConfirmMobileView from '@/components/Restaurant/ConfirmMobileView'
import { OrderSelectCard } from '@/components/Restaurant/OrderSelectCard'
import RestaturantBanner from '@/components/Restaurant/RestaturantBanner'
import RestaurantCategories from '@/components/Restaurant/RestaurantCategories'
import RestaurantMenu from '@/components/Restaurant/RestaurantMenu'
import React, { useEffect, useState } from 'react'

function Page() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleFoodClick = () => { setIsModalVisible(true); };

    const handleCloseModal = () => { setIsModalVisible(false); };

    useEffect(() => {
        if (isModalVisible) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalVisible]);
    return (
        <div className='max-w-[1300px] mx-auto px-2'>
            <RestaturantBanner />
            <RestaurantCategories />
            <div className='flex gap-4'>
                <RestaurantMenu onFoodClick={handleFoodClick} />
                <div className='hidden md:block'>
                    <Cart />
                </div>
            </div>
            {isModalVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={handleCloseModal}
                    ></div>

                    <div className="relative z-10">
                        <OrderSelectCard onClose={handleCloseModal} />
                    </div>
                </div>
            )}
            <ConfirmMobileView />


        </div>
    )
}

export default Page