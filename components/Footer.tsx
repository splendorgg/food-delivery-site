import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className='mt-auto'>
            <div className='flex justify-between h-full bg-[#f5efef] w-full  px-48 text-black py-12'>
                <div className='text-center'>
                    <h2 className='text-2xl font-black pb-5'>LOCATION</h2>
                    <p>45 Elm Street</p>
                    <p>Springfield 12345</p>
                    <p>USA</p>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl font-black pb-5'>WORKING HOURS</h2>
                    <p>Mon-Fri 9:00AM - 10:00PM</p>
                    <p>Saturday 10:00AM - 9:00PM</p>
                    <p>Sunday 12:00PM - 8:00PM</p>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl font-black pb-5'>ORDER NOW</h2>
                    <p>30 Minutes delivery quarantee</p>
                    <p className='text-3xl font-bold text-[#e21b70]'>999-999-9999</p>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl font-black pb-5'>FOLLOW US</h2>
                    <p>Follow our social medias</p>
                    <div className='flex justify-center gap-4 pt-2'>
                        <FaFacebook size={25} className='cursor-pointer hover:text-[#e21b70]' />
                        <FaTwitter size={25} className='cursor-pointer hover:text-[#e21b70]' />
                        <FaInstagram size={25} className='cursor-pointer hover:text-[#e21b70]' />
                        <FaYoutube size={25} className='cursor-pointer hover:text-[#e21b70]' />
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-300 py-4 text-center bg-[#f5efef] text-black flex items-center justify-center gap-2 '>
                <a>©2024 <span className='text-red-600 font-bold'>Splendorg</span> All rights reserved | </a>
                <a className='cursor-pointer hover:font-bold'>About Us | </a>
                <a className='cursor-pointer hover:font-bold'>Terms Of Use | </a>
                <a className='cursor-pointer hover:font-bold'>Privacy Policy</a>
            </div>
        </div>
    )
}

export default Footer