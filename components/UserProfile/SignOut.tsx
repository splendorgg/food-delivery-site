'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

function SignOut() {
    return (
        <div>
            <button onClick={() => signOut()} className='bg-[#e21b70] text-white px-2 py-1 rounded-lg hover:bg-[#bb185f]'>Sign out</button>
        </div>
    )
}

export default SignOut