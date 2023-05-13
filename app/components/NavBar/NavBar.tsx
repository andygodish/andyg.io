import React from 'react'
import { Link } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';
import { MdClose, MdMenu, MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLockScroll } from '~/hooks/useLockScroll';
import { Theme, useTheme } from '~/utils/theme-provider';


export interface NavBarProps { }

export interface NavBarLink {
  name: string;
  path: string;
}


const NavBar: React.FC<NavBarProps> = (_props): React.ReactElement => {
  const [showMenu, setShowMenu] = React.useState(false);
  const scrollPosition = useScrollPosition()
  const app_name = ENV.APP_NAME;
  const { lockScroll, unlockScroll } = useLockScroll();
  const [theme, setTheme] = useTheme()

  const links: NavBarLink[] = [
    { name: 'HOME', path: '/' },
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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };


  return (
    <>
      <span onClick={() => handleMenuClick(showMenu)} className='fixed md:hidden block
        right-4 top-6 
        cursor-pointer 
        z-50 
        text-darkAubergine dark:text-canonicalAubergine-200 text-xl hover:text-ubuntuOrange-700 duration-500'>
        {
          showMenu ? <MdClose size='2rem' className='text-canonicalAubergine-200 hover:text-ubuntuOrange-700 duration-500' /> : <MdMenu size='2rem' className='hover:text-ubuntuOrange-700 duration-500' />
        }
      </span>
      <div className={`fixed 
        top-0 left-0 
        z-30 
        w-full 
        transition-all duration-500 
        ${scrollPosition > 0 ? "bg-warmGrey-100 dark:bg-darkAubergine shadow-md text-darkAubergine dark:text-canonicalAubergine-200" : `bg-transparent text-darkAubergine dark:text-canonicalAubergine-200`}`}
      >
        <nav className="p-5 m-auto 
          max-w-screen-xl 
          md:flex md:items-center md:justify-between">
          <div className='flex justify-between items-center'>
            <span className='text-2xl cursor-pointer'>
              <Link to={"/"}>
                {app_name}
              </Link>
            </span>
          </div>
          <div className='hidden md:flex md:items-center'>

            <ul className={`hidden md:flex md:items-center z-[-1] md:z-auto absolute md:static w-full left-0 md:w-auto md:py-0 
            py-4 md:pl-0 pl-7 opacity-0 md:opacity-100`}
            >
              {
                links.map((link, index) => {
                  return (
                    <li className={`my-6 ${index < links.length - 1 ? 'mx-4' : 'ml-4 mr-12'} md:my-0`} key={index}>
                      <Link to={link.path} onClick={() => setShowMenu(false)} className='text-xl hover:text-ubuntuOrange-700 duration-500'>{link.name}</Link>
                    </li>
                  )
                })
              }
            </ul>
            {theme != Theme.DARK ? <MdOutlineLightMode size={'1.5rem'} className='cursor-pointer hover:text-ubuntuOrange-700' onClick={toggleTheme} /> : <MdOutlineDarkMode size={'1.5rem'} className='cursor-pointer hover:text-ubuntuOrange-700' onClick={toggleTheme} />}
          </div>
        </nav>
      </div>
      {
        !showMenu ? null :
          <Overlay links={links} handleMenuClick={handleMenuClick} showMenu={showMenu} />
      }
    </>
  );
};

export default NavBar;