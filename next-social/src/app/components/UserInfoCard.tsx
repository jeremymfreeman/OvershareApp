import Link from 'next/link'
import Image from 'next/image'

const UserInfoCard = ({userId}:{userId:string}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">User Media</span>
            <Link href="/" className="text-blue-500 text-sx">See All</Link>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col gap-4 text-gray-500">
            <div className="flex items-center gap-2">
                <span className="text-xl text-black">John Doe</span>
                <span className="text-sm">@johndoe55</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                metus massa. Ut congue, felis in luctus lacinia, sapien turpis
                tristique libero.
            </p>
            <div className="flex items-center gap-2">
                <Image src="/map.png" alt="" width={16} height={16}
                />
                <span>Living in <b>Los Angeles</b></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/school.png" alt="" width={16} height={16}
                />
                <span>Went to <b>Los Angeles High School</b></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/work.png" alt="" width={16} height={16}
                />
                <span>Working at <b>Los Angeles Department of Sanitation</b></span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                    <Image src="/link.png" alt="" width={16} height={16}
                    />
                    <Link href="https://www.google.com/webhp" className="text-blue-500 font-medium">
                        Find me on Google
                    </Link>
                </div>
                <div className="flex gap-1 items-center">
                    <Image src="/date.png" alt="" width={16} height={16}
                    />
                    <span>Joined July 2021</span>
                </div>
            </div>
            <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
            <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
        </div>
    </div>
    )
}

export default UserInfoCard