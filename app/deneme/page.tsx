import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

async function page() {
    const session = await getServerSession(authOptions)
    return (
        <div >
            {JSON.stringify(session)}
        </div>
    )
}

export default page