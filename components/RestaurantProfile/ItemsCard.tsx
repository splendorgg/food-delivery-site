'use client'
import axios from 'axios';
import React, { useState } from 'react'
import AddItem from './AddItem';
import Image from 'next/image';
type Item = {
    id: number;
    name: string;
    price: number;
    description: string;
    categories: { id: number; name: string }[]
    photoUrl?: string;

};

type RestaurantMenuProps = {
    items: Item[];
    restaurantId: number;
};

function ItemsCard({ items, restaurantId }: RestaurantMenuProps) {
    const [menuItems, setMenuItems] = useState(items);

    const handleDelete = async (id: number) => {
        const confirmDelete = confirm("Are you sure you want to delete this item?");
        if (!confirmDelete) return;
        try {
            const res = await axios.delete('/api/items', { data: { id } });

            if (res.status === 200) {
                setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
            } else {
                alert(`Failed to delete item: ${res.data.error}`);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(`Failed to delete item: ${error.response?.data?.error || error.message}`);
            } else {
                alert('An unexpected error occurred');
            }
        }
    };

    return (
        <div className='relative flex p-4 gap-4'>
            <div className='self-start sticky top-4'>
                <AddItem restaurantId={restaurantId} setMenuItems={setMenuItems} />
            </div>
            <div className="flex items-center  gap-4 rounded-lg flex-wrap ">
                {menuItems.map((item) => (
                    <div key={item.id} className="overflow-hidden bg-white shadow-md  rounded-lg p-4 w-60 flex flex-col items-start gap-2 border border-gray-200">
                        <h1 className="text-sm font-bold break-words w-full">Name: {item.name}</h1>
                        <p className="text-sm font-bold text-gray-700">Price: ${item.price.toFixed(2)}</p>
                        <p className="text-sm font-bold text-gray-700 break-words w-full ">Description: {item.description} </p>
                        <div>
                            {item.photoUrl && (
                                <Image src={item.photoUrl} alt="item" width={100} height={100} className="w-20 h-20 object-cover" />
                            )}

                        </div>
                        <button onClick={() => handleDelete(item.id)} className='bg-red-700 text-white px-2 py-1 rounded-lg mt-auto'>Delete</button>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default ItemsCard