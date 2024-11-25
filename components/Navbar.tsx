import React from 'react'
import {Button} from './Button'

function Navbar() {
    return (
        <>
            <div className='flex justify-between bg-[#f5efef] w-full h-14 items-center px-20 text-black drop-shadow-lg'>
                <div>
                    <h1>Logo</h1>
                </div>
                <div className='flex gap-4'>
                    <Button>Log in</Button>
                    <Button>Sign up</Button>
                    <Button>Language</Button>
                    <Button>Cart</Button>
                </div>
            </div>
        </>
    )
}

export default Navbar