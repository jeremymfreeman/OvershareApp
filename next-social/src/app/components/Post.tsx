import Image from 'next/image'
import Comments from './Comments'

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/28818459/pexels-photo-28818459/free-photo-of-lush-green-forest-canopy-scene.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium">John Doe</span>
                </div>
                <Image src="/more.png" width={16} height={16} alt=""/>
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image src="https://images.pexels.com/photos/28967156/pexels-photo-28967156/free-photo-of-scenic-wooden-bridge-in-a-lush-green-forest.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" fill className="object-cover rounded-md" alt=""
                    />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Nullam eget urna ac nunc fermentum ultricies. 
                    Cras nec eros et magna tincidunt fermentum. 
                    Donec nec dui nec
                </p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/like.png" width={16} height={16} alt="" className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline"> Likes</span></span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/comment.png" width={16} height={16} alt="" className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline"> Comments</span></span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/share.png" width={16} height={16} alt="" className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline"> Shares</span></span>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Post