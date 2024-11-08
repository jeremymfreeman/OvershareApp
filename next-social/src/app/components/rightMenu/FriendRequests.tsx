import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@clerk/nextjs/server';
import prisma from '@/library/client';
import FriendRequestList from './FriendRequestList';

const FriendRequests = async () => {

    const {userId} = await auth();

    if (!userId) return null;

    const request = await prisma.followRequest.findMany({
        where:{
            receiverId:userId
        },
        include:{
            sender:true,
        },
    });

    if (request.length === 0) return null;

    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Friend Requests</span>
                <Link href="/" className="text-blue-500 text-sx">See All</Link>
            </div>
            {/* USER */}
            <FriendRequestList requests={request}/>
        </div>
    )
}

export default FriendRequests