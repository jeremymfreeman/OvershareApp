import Image from 'next/image';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/library/client';

const AddPost = async () => {
    const {userId} = await auth();

    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            {/* AVATAR */}
            <Image src="https://images.pexels.com/photos/28291066/pexels-photo-28291066/free-photo-of-two-women-are-working-in-a-tea-field.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full"
            />

            {/* POST */}
            <div className="flex-1">
                {/* TEXT INPUT */}
                <form action="" className="flex gap-4">
                    <textarea placeholder="What do you want to say?" className="flex-1 bg-slate-100 rounded-lg p-2" name="desc"></textarea>
                    <Image src="/emoji.png" alt="" width={20} height={20} className="w-5 h-5 cursor-pointer self-end"
                    />
                    <button>Send</button>
                </form>
                {/* POST OPTIONS */}
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addimage.png" alt="" width={20} height={20}
                        />
                        Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addVideo.png" alt="" width={20} height={20}
                        />
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addevent.png" alt="" width={20} height={20}
                        />
                        Event
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/poll.png" alt="" width={20} height={20}
                        />
                        Poll
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost