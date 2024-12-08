import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import ItemsCard from '@/components/RestaurantProfile/ItemsCard'
import prisma from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
interface ProfilePageParams {
    params: {
        id: string
    }
}
async function page({ params }: ProfilePageParams) {
    const restaurantParamId = parseInt(params.id)
    if (isNaN(restaurantParamId)) {
        redirect('/menu');
    }

    const session = await getServerSession(authOptions)
    const userId = parseInt(session?.user?.id)
    if (!session) {
        redirect('/userlogin/login');
    }

    const userRestaurantIds = await prisma.restaurant.findMany({
        where: {
            userId: userId,
        },
        select: {
            id: true,
        },
    });
    const restaurantIds = userRestaurantIds.map((restaurant) => restaurant.id)
    if (!restaurantIds.includes(restaurantParamId)) {
        redirect('/userlogin/login');
    }
    const restaurantInfo = await prisma.restaurant.findUnique({
        where: {
            id: restaurantParamId,
        },
        include: {
            items: {
                include: {
                    categories: true,
                },
            },
        },
    });

    return (
        <div className='flex flex-col gap-4 min-h-screen'>
            <div className='flex items-center'>
                <ItemsCard items={restaurantInfo?.items ?? []} restaurantId={restaurantParamId} />
            </div>
        </div>
    )
}

export default page