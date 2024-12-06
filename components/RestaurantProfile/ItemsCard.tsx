'use client'
import axios from 'axios';
import React, { useState } from 'react'
type Item = {
    id: number;
    name: string;
    price: number;
    description: string;
    categories: { id: number; name: string }[]
};

type RestaurantMenuProps = {
    items: Item[];
};

function ItemsCard({ items }: RestaurantMenuProps) {
    const [menuItems, setMenuItems] = useState(items);

    const handleDelete = async (id: number) => {
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
        <div className="flex gap-4 p-4 shadow-xl rounded-lg flex-wrap justify-center">
            {menuItems.map((item) => (
                <div key={item.id} className=" bg-white shadow-md rounded-lg p-4 w-60 flex flex-col items-start gap-2 border border-gray-200">
                    <h1 className="text-lg font-bold">Name: {item.name}</h1>
                    <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Description: {item.description}</p>
                    <p className="text-sm text-gray-500">Categories: {item.categories.map((category) => category.name).join(', ')}</p>
                    <button onClick={() => handleDelete(item.id)} className='bg-red-700 text-white px-2 py-1 rounded-lg '>Delete</button>
                </div>
            ))}
        </div>

    )
}
export default ItemsCard