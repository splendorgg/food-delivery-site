'use client'
import axios from 'axios'
import React, { useCallback, useState } from 'react'

function AddItem({ restaurantId }: { restaurantId: number }) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")

    const handleAddItem = useCallback(async (event: React.FormEvent) => {
        event.preventDefault()
        const parsedPrice = parseFloat(price);
        if (isNaN(parsedPrice) || parsedPrice <= 0) {
            alert("Please enter a valid price.");
            return;
        }
        try {
           const response = await axios.post('/api/items', { name, price: parsedPrice, desc, restaurantId })
            alert("Item successfully added!");

            const newItem = response.data.newItem; 
            setMenuItems((prevItems) => [...prevItems, newItem]);

            setName("");
            setPrice("");
            setDesc("");
        } catch (error) {
            console.error("Failed to add item:", error);
            alert("An error occurred while adding the item.");
        }
    }, [name, price, desc, restaurantId])

    return (
        <div>
            <div className='bg-white max-w-[400px]  p-8 flex flex-col shadow-2xl rounded-lg  items-center'>
                <h1>Add Item</h1>
                <form onSubmit={handleAddItem} className='flex flex-col gap-4 items-center'>
                    <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                        placeholder="Name"
                    />
                    <input
                        required
                        type="number"
                        value={price}
                        step="0.01"
                        onChange={(e) => setPrice(e.target.value)}
                        className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                        placeholder="Price"
                    />
                    <input
                        required
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                        placeholder="Description"
                    />
                    <button type='submit' className='text-white bg-[#e21b70] w-[80px] h-[40px]'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddItem