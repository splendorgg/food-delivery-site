'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const NoRestaurantFound = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.push('/menu');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Restaurant Not Found</h1>
                <p className="text-lg text-gray-600 mb-6">Unfortunately, we couldn&apos;t find the restaurant you were looking for. Please try again with a different search.</p>
                <button
                    onClick={handleGoBack}
                    className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200"
                >
                    Go Back to Menu
                </button>
            </div>
            <div className="text-gray-500 text-sm mt-4">
                <p>You can contact support for help.</p>
            </div>
        </div>
    );
};

export default NoRestaurantFound;
