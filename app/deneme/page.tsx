import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

async function page() {
    const session = await getServerSession(authOptions)
    return (
        <div >
            {JSON.stringify(session)}
        </div>
    )
}

export default page