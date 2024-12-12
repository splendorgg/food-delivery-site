'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'

export default function AddRestaurant({ id }: { id: string; }) {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [opening, setOpening] = useState("")
    const [closing, setClosing] = useState("")
    const [profilePhoto, setProfilePhoto] = useState<File | null>(null)
    const [bannerPhoto, setBannerPhoto] = useState<File | null>(null)
    const router = useRouter();

    const handleAddRestaurant = useCallback(async (event: React.FormEvent) => {
        event.preventDefault()
        if (!profilePhoto || !bannerPhoto) {
            alert('Please select a photo')
            return
        }

        const formData = new FormData()
        formData.append('name', name)
        formData.append('location', location)
        formData.append('opening', opening)
        formData.append('closing', closing)
        formData.append('profilePhoto', profilePhoto)
        formData.append('bannerPhoto', bannerPhoto)
        formData.append('userId', id)
        try {
            await axios.post('/api/restaurants', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            alert("Restaurant successfully added!");


            setName("");
            setLocation("");
            setOpening("");
            setClosing("");
            setProfilePhoto(null);
            setBannerPhoto(null);

            router.push(`/protected/userprofile/${id}`)
        } catch (error) {
            if (error.response && error.response.data.error) {
                alert(error.response.data.error);
            } else {
                alert("An error occurred while adding the restaurant.");
            }
        }
    }, [name, location, opening, closing, profilePhoto, bannerPhoto, id, router]);

    return (
        <div>
            <div className='bg-white max-w-[400px]  p-8 flex flex-col shadow-2xl rounded-lg  items-center'>
                <h1>Add Item</h1>
                <form onSubmit={handleAddRestaurant} className='flex flex-col gap-4 items-center'>
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
                        type="text"
                        value={location}
                        step="0.01"
                        onChange={(e) => setLocation(e.target.value)}
                        className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                        placeholder="Location"
                    />
                    <input
                        required
                        type="text"
                        value={opening}
                        onChange={(e) => setOpening(e.target.value)}
                        className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                        placeholder="Opening Time (08:00 AM)"
                    />
                    <input
                        required
                        type="text"
                        value={closing}
                        onChange={(e) => setClosing(e.target.value)}
                        className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                        placeholder="Closing Time 09:00 PM)"
                    />
                    <input
                        required
                        type="file"
                        accept='.jpg,.jpeg,.png,.webp'
                        onChange={(e) => setProfilePhoto(e.target.files ? e.target.files[0] : null)}
                        className="input w-full h-[50px] py-2 px-2 border-solid border-2 rounded-md text-black "
                    />
                    <input
                        required
                        type="file"
                        accept='.jpg,.jpeg,.png,.webp'
                        onChange={(e) => setBannerPhoto(e.target.files ? e.target.files[0] : null)}
                        className="input w-full h-[50px] py-2 px-2 border-solid border-2 rounded-md text-black "
                    />
                    <button type='submit' className='text-white bg-[#e21b70] w-[80px] h-[40px]'>Add</button>
                </form>
            </div>
        </div>
    )
}
