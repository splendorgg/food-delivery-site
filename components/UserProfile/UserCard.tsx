'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
interface Restaurant {
    id: number;
    name: string;
    location: string;
    opening: string;
    closing: string;
}

interface User {
    name?: string | null | undefined
    email?: string | null | undefined
    id: string
    image: undefined
}


interface UserCardProps {
    restaurants: Restaurant[];
    user: User
}
function UserCard({ restaurants, user }: UserCardProps) {
    const [allRestaurants, setAllRestaurants] = useState(restaurants)

    const handleDelete = async (id: number) => {
        const confirmDelete = confirm("Are you sure you want to delete this item?");
        if (!confirmDelete) return;
        try {
            const res = await axios.delete('/api/restaurants', { data: { id } });
            if (res.status === 200) {
                setAllRestaurants((prevItems) => prevItems.filter((item) => item.id !== id));
            } else {
                alert(`Failed to delete restaurant: ${res.data.error}`);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(`Failed to delete item: ${error.response?.data?.error || error.message}`);
            } else {
                alert('An unexpected error occurred');
            }
        }

    }

    return (
        <div className='flex gap-4  p-4 '>
            <div className='flex flex-col gap-2 shadow-lg rounded-lg p-4'>
                <h1>My Details</h1>
                <div className='flex flex-col mt-2'>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
                <div className='mt-auto'>
                    <Link href={`/protected/userprofile/${user.id}/createrestaurant`}>
                        <button className='bg-[#e21b70] text-white px-2 py-1 rounded-lg'>Add Restaurant</button>
                    </Link>
                </div>
            </div>
            <div className='shadow-lg rounded-lg p-4'>
                <h1 className='mb-2 text-center'>My Restaurants</h1>
                <div>{allRestaurants.length > 0 ?
                    <div className='flex gap-4 flex-wrap'>
                        {allRestaurants.map((restaurant) => (
                            <div key={restaurant.id} className='flex items-center flex-col gap-1'>
                                <div>
                                    <h1>Name: {restaurant.name}</h1>
                                    <p>Location: {restaurant.location}</p>
                                    <p>Opening Time: {restaurant.opening}</p>
                                    <p>Closing Time: {restaurant.closing}</p>
                                </div>
                                <button className='bg-[#e21b70] text-white px-2 py-1 rounded-lg'><Link href={`/restaurant/${restaurant.id}`}>Go to Restaurant</Link></button>
                                <button className='bg-[#e21b70] text-white px-2 py-1 rounded-lg'><Link href={`/protected/restaurantprofile/${restaurant.id}`}>Edit Restaurant</Link></button>

                                <button onClick={() => handleDelete(restaurant.id)} className='bg-[#e21b70] text-white px-2 py-1 rounded-lg'>Delete Restaurant</button>
                            </div>

                        ))}
                    </div>
                    : <button className='bg-[#e21b70] text-white px-2 py-1 rounded-lg'>Add Restaunt</button>}

                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default UserCard