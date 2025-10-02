import { useGetUsers } from '@/lib/react-query/queriesAndMutations';
import Loader from './Loader';
import UserCard from './UserCard';
import { Models } from 'appwrite';
import { useToast } from '@/hooks/use-toast';


const RightSidebar = () => {
        const { data: creators, isPending: isCreatorsLoading, isError: isErrorCreators } = useGetUsers(10);

        const { toast } = useToast();
        if (isErrorCreators) {
            toast({ title: "Something went wrong." });
            
            return;
          }

      return (
        <div className="rightsidebar">
            <div className='ml-2 mr-2'>
                <h2 className="text-xl font-bold mb-10 ml-6">Other Users</h2>
                
                    {isCreatorsLoading && !creators ? (
                        <Loader />
                    ) : (
                        <ul className="grid grid-cols-2 gap-6">
                            {creators?.documents.map((creator: Models.Document) => (
                                <UserCard user={creator} />
                            ))}
                        </ul>
                    )}
            </div>
        </div>
      );
}

export default RightSidebar;