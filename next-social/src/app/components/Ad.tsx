import Image from 'next/image'

const Ad = ({size}:{size: "sm" | "md" | "lg"}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            {/* TOP */}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span>Sponsored Ads</span>
                <Image src="/more.png" alt="" width={16} height={16} />
            </div>
            {/* Bottom */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" :  size === "md" ? "gap-4" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size==="md" ? "h-36" : "h-48"}`}>
                    <Image src="https://images.pexels.com/photos/28665515/pexels-photo-28665515/free-photo-of-hamburg-urban-train-station-architectural-view.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="rounded-lg object-cover" 
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/28665515/pexels-photo-28665515/free-photo-of-hamburg-urban-train-station-architectural-view.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width={24} height={24} className="rounded-full w-6 h-6 object-cover" 
                    />
                    <span className="text-blue-500 font-medium">Bridge Solutions LLC</span>
                </div>
                <p className={size==="sm" ? "text-xs" : "test-sm"}>
                    {size === "sm" 
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
                    : size==="md" 
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                </p>
                <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>
            </div>
        </div>
    )
}

export default Ad;