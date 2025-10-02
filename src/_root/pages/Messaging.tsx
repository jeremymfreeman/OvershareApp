import AddMessageForm from "@/components/shared/AddMessageForm"
import Loader from "@/components/shared/Loader"
import MessageCard from "@/components/shared/MessageCard";
import { useGetMessages } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const Messaging = () => {
    const { ref, inView } = useInView();
    const { data: messages, fetchNextPage, hasNextPage } = useGetMessages();

    useEffect(() => {
        if (inView) fetchNextPage();
    }, [inView])

    if (!messages) return <div className='flex-center w-full h-full'><Loader /></div>

    const shouldShowMessages = !messages.pages.every((item) => item.documents.length === 0);


    return (
        <div className="w-full p-8 flex flex-col">
            <h2 className="h3-bold md:h2-bold text-left w-full p-10">
                Public Messaging
            </h2>

            <div className="mb-8">
                <AddMessageForm />
            </div>

            <h3 className="h3-bold text-left w-full p-4">Messages:</h3>

            <div>
                {shouldShowMessages ? (
                    <ul>
                        {messages && messages.pages.map((message) => (
                            message.documents.map((m: any) => (
                                <MessageCard message={m} key={m.$id}/>
                            ))
                        ))}
                    </ul>
                ) : (<p className='text-light-4 mt-10 text-center w-full'>End of Messages</p>)}
            </div>

            {hasNextPage && (
                <div ref={ref} className='mt-10'>
                    <Loader />
                </div>
            )}
        </div>
    )
}

export default Messaging