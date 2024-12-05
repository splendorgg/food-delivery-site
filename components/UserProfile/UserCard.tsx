import Link from 'next/link';
import React from 'react'
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

    return (
        <div className='flex gap-4  p-4 shadow-xl rounded-lg'>
            <div className=''>
                <h1>My Details</h1>
                <div className='flex flex-col mt-2'>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            </div>
            <div className=''>
                <h1 className='mb-2 text-center'>My Restaurants</h1>
                <div>{restaurants.length > 0 ?
                    <div className='flex gap-4'>
                        {restaurants.map((restaurant) => (
                            <div key={restaurant.id} className='flex items-center flex-col gap-1'>
                                <div>
                                    <h1>Name: {restaurant.name}</h1>
                                    <p>Location: {restaurant.location}</p>
                                    <p>Opening Time: {restaurant.opening}</p>
                                    <p>Closing Time: {restaurant.closing}</p>
                                </div>
                                <button className='bg-[#e21b70] text-white px-2 py-1 rounded-lg'><Link href={`/restaurant/${restaurant.id}`}>Go to Restaurant</Link></button>
                                <button className='bg-[#e21b70] text-white px-2 py-1 rounded-lg'><Link href={`/restaurant/${restaurant.id}`}>Edit Restaurant</Link></button>
                            </div>

                        ))}
                    </div>
                    : <button>Add Restaunt</button>}

                </div>
            </div>
        </div>
    )
}

export default UserCard