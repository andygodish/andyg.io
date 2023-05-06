import React from 'react'
import { Link } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';
import { MdClose, MdMenu } from 'react-icons/md';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLocation } from '@remix-run/react';
import { useLockScroll } from '~/hooks/useLockScroll';


export interface NavBarProps { }

export interface NavBarLink {
  name: string;
  path: string;
}


const NavBar: React.FC<NavBarProps> = (_props): React.ReactElement => {
  const location = useLocation();
  const [showMenu, setShowMenu] = React.useState(false);
  const scrollPosition = useScrollPosition()
  const app_name = ENV.APP_NAME;
  const { lockScroll, unlockScroll } = useLockScroll();

  const links: NavBarLink[] = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: 'about' },
    { name: 'SERVICES', path: 'services' },
    { name: 'CONTACT', path: 'contact' }
  ];

  const handleMenuClick = (menuState: boolean) => {
    setShowMenu(!menuState);

    if (menuState) { // this doesn't verbally make sense due to the scope of the function
      unlockScroll();
    } else {
      lockScroll();
    }
  }

  return (
    <>
      <span onClick={() => handleMenuClick(showMenu)} className='fixed right-4 top-6 cursor-pointer md:hidden block z-50 text-white text-xl hover:text-cyan-500 duration-500'>
        {
          showMenu ? <MdClose size='2rem' /> : <MdMenu size='2rem' className={`${scrollPosition > 0 ? "text-white" : `${location.pathname != "/" ? "text-black" : "text-white"}`}`} />
        }
      </span>
      <div className={`fixed top-0 left-0 z-30 w-full transition-all duration-500 
        ${scrollPosition > 0 ? "bg-gray-900 shadow-md text-white" : `bg-transparent ${location.pathname != "/" ? "text-black" : "text-white"}`}`}
      >
        <nav className="p-5 m-auto max-w-screen-xl md:flex items-center md:justify-between">
          <div className='flex justify-between items-center'>
            <span className='text-2xl font-[Poppins] cursor-pointer'>
              <Link to={"/"}>
                <img className="h-10 mr-2 inline" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
                {app_name}
              </Link>
            </span>
          </div>
          <ul className={`hidden md:flex md:items-center z-[-1] md:z-auto absolute md:static w-full left-0 md:w-auto md:py-0 
      py-4 md:pl-0 pl-7 opacity-0 md:opacity-100`}
          >
            {
              links.map((link, index) => {
                return (
                  <li className={`my-6 ${index < links.length - 1 ? 'mx-4' : 'ml-4'} md:my-0`} key={index}>
                    <Link to={link.path} onClick={() => setShowMenu(false)} className='text-xl hover:text-cyan-500 duration-500'>{link.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
      {
        !showMenu ? null :
          <Overlay links={links} handleMenuClick={handleMenuClick} showMenu={showMenu}/>
      }
    </>
  );
};

export default NavBar;