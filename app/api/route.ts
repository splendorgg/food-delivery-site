import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function GET() {
    const session = await getServerSession(authOptions)
    console.log(session) 
    return NextResponse.json({ authenticated: !!session })
}
