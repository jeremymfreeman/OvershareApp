import Loader from '@/components/shared/Loader';
import UserCard from '@/components/shared/UserCard';
import { useToast } from '@/hooks/use-toast';
import { useGetUsers } from '@/lib/react-query/queriesAndMutations';

const AllUsers = () => {
  const { data: creators, isPending: isCreatorsLoading, isError: isErrorCreators } = useGetUsers();

  const { toast } = useToast();
  if (isErrorCreators) {
      toast({ title: "Something went wrong." });
      
      return;
  }

  return (
    <div className='common-container'>
      <div className='user-container'>
        <div className='flex gap-3 flex-start justify-start w-full'>
          <img src="/assets/icons/people.svg" alt="people" className="w-9 h-9 invert-white" />
          <h3 className='h3-bold md:h2-bold text-left w-full'>All Users</h3>
        </div>
        
        {isCreatorsLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className="flex-1 min-w-[200px] w-full  ">
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default AllUsers