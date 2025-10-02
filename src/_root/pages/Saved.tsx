import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";


const Saved = () => {
  const { data: currentUser, isPending: isSavedLoading } = useGetCurrentUser();

  const savePosts = currentUser?.save
    .map((savePost: Models.Document) => ({
      ...savePost.post,
      creator: {
        imageUrl: currentUser.imageUrl,
      },
    }))
    .reverse();

  if (isSavedLoading) return <div className='flex-center w-full h-full'><Loader /></div>

  return (
    <div className='saved-container'>
      <div className='flex gap-3 w-full'>
        <img src="/assets/icons/save.svg" alt="save" className='invert-white' width={36} height={36}/>
        <h2 className='h3-bold md:h2-bold text-left'>Saved Posts</h2>
      </div>
      <div className='flex flex-wrap gap-9 w-full max-w-5xl mt-9'>
        {savePosts?.length === 0 ? (
          <p className='text-light-4 mt-10 text-center w-full'>No Saved Posts</p>
        ) : (
          <GridPostList posts={savePosts} showUser={false} showStats={false}/>
        )}
      </div>

    </div>
  )
}

export default Saved