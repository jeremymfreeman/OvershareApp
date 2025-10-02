import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useEffect } from 'react';
import { useUserContext } from '@/context/AuthContext';
import { INavLink } from '@/types';
import { sidebarLinks } from '@/constants';

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) {
      navigate(0);
    }
  }, [isSuccess])

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <h3 className='text-blue-300 h3-bold md:h2-bold'>Overshare...</h3>
        </Link>
        <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
          <img src={user.imageUrl || "/assets/icons/profile-placeholder.svg"} alt="profile" className="h-14 w-14 rounded-full"/>
          <div className="flex flex-col">
            <p className="body-bold text-blue-300">
              {user.name}
            </p>
            <p className="small-regular text-light-3">
              @{user.username}
            </p>
          </div>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li key={link.label} className={`leftsidebar-link group ${isActive && 'bg-primary-500'}`}>
                <NavLink to={link.route} className="flex gap-4 items-center p-4">
                  <img src={link.imgURL} alt={link.label} className={`group-hover:invert-white ${isActive && 'invert-white'}`}/>
                  <p className={`text-blue-300 group-hover:text-white ${isActive && 'text-white'}`}>{link.label}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button variant="ghost" className="shad-button_ghost" onClick={() => signOut()}>
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="text-blue-300 small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  )
}

export default LeftSidebar