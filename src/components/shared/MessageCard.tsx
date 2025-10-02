type MessageCardProps = {
    message: any;
}

const MessageCard = ({ message }: MessageCardProps) => {

    return (
        <div>
                <li className='flex flex-col justify-center mb-2 gap-4 border border-dark-4 rounded-[20px] px-5 py-8'>
                    <div className='flex flex-1 items-center mb-2'>
                        <img src={message.user.imageUrl} alt="profile" className="rounded-full w-8 h-8 mr-2" />
                        <p>{message.user.username}</p>
                    </div>
                    <div>
                        <p>{message.content}</p>
                    </div>
                </li>
        </div>
    )
}

export default MessageCard