import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import GetUserRestaurants from '@/components/UserProfile/GetUserRestaurants';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

interface ProfilePageParams {
  params: {
    id: string
  }
}

async function page({ params }: ProfilePageParams) {
  const session = await getServerSession(authOptions);
  const sessionId = parseInt(session?.user?.id)
  const userId = parseInt(params.id)

  if (!session || userId !== sessionId) {
    redirect('/userlogin/login');
  }

  return (
    <div className='flex items-center justify-center min-h-screen' >
      <div className='flex items-center'>
        <GetUserRestaurants />
      </div>
    </div>
  )
}

export default page
