import { useGetCommentsByPost } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite'
import { Link } from 'react-router-dom'
import Loader from './Loader';

type CommentSectionPostProp = {
    post?: Models.Document;
}

const CommentSection = ({post}: CommentSectionPostProp) => {

    const { data: comments, isPending } = useGetCommentsByPost(post?.$id || "", 2);


  return (
    <div className=''>
        {isPending ? <Loader /> : <div>
            <Link to={`/posts/${post?.$id}/comments`}><h2 className='text-2xl font-bold mb-4'>Comments</h2></Link>

            <ul>
                {comments && comments.documents.map((comment) => (
                    <li className='flex flex-col justify-center mb-2 p-2' key={comment.$id}>
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

export default CommentSection