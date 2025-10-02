import AddCommentForm from "@/components/shared/AddCommentForm";
import Loader from "@/components/shared/Loader";
import PostStats from "@/components/shared/PostStats";
import { useUserContext } from "@/context/AuthContext";
import { useGetCommentsByPost, useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { Link, useParams } from "react-router-dom";


const PostComments = () => {
    const { id } = useParams();
    const { data: post } = useGetPostById(id || "");

    const { data: comments, isPending: isCommentsPending } = useGetCommentsByPost(post?.$id || "");

    const { user } = useUserContext();


  return (
    <div className="w-full p-8 flex flex-col">
        <h2 className="h3-bold md:h2-bold text-left w-full p-10">
            Post Comments
        </h2>

        <div className='relative min-w-80 h-80 mb-6 w-full'>
                <Link to={`/posts/${post?.$id}`} className='grid-post_link'> 
                    <img src={post?.imageUrl} className='h-full w-full object-cover'/>
                </Link>

                <div className='grid-post_user'>
                        <div className='flex items-center justify-start gap-2 flex-1'>
                            <img src={post?.creator.imageUrl} alt="creator" className='h-8 w-8 rounded-full' />
                            <p className='line-clamp-1'>{post?.creator.name}</p>
                        </div>
                    <PostStats post={post} userId={user.id} />
                </div>
        </div>

        <div className="mb-8">
            <AddCommentForm postId={post?.$id || ""}/>
        </div>
        
        <h3 className="h3-bold text-left w-full p-4">Comments:</h3>

        {isCommentsPending ? <Loader /> : <div>
            <ul>
                {comments && comments.documents.map((comment) => (
                    <li className='flex flex-col justify-center mb-2 gap-4 border border-dark-4 rounded-[20px] px-5 py-8' key={comment.$id}>
                        <div className='flex flex-1 items-center mb-2'>
                            <img src={comment.user.imageUrl} alt="profile" className="rounded-full w-8 h-8 mr-2" />
                            <p>{comment.user.username}</p>
                        </div>
                        <div>
                            <p>{comment.Content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>}
    </div>
  )
}

export default PostComments