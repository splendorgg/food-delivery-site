'use client'
import { Button } from './Buttons/Button'
import { LiaShoppingBagSolid } from "react-icons/lia";
import DropDown from './Buttons/DropDown';

function Navbar() {
    return (
        <div className='sticky top-0 z-10'>
            <div className='flex justify-between bg-[#fff] w-full h-14 items-center px-20 text-black drop-shadow-lg'>
                <div>
                    <h1>Logo</h1>
                </div>
                <div className='flex gap-4 items-center'>
                    <Button variant='empty'>Log in</Button>
                    <Button>Sign up</Button>
                    <DropDown />
                    <div className='cursor-pointer hover:bg-gray-300 px-2 py-2 rounded-full transition-all duration-200 '>
                        <LiaShoppingBagSolid size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar