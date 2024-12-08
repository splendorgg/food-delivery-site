import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/db';
import { getServerSession } from 'next-auth';
import UserCard from './UserCard';

async function GetUserRestaurants() {
    const session = await getServerSession(authOptions);
    const userId = parseInt(session?.user?.id)


    const userRestaurants = await prisma.restaurant.findMany({
        where: {
            userId: userId
        }
    })
    return (
        <div>
            <div>
                <UserCard restaurants={userRestaurants} user={session?.user} />
            </div>
        </div>
    )

}

export default GetUserRestaurants