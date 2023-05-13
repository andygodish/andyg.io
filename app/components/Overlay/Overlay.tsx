import { Link } from '@remix-run/react';
import React from 'react'
import { NavBarLink } from '~/components/NavBar/NavBar';
import { socialLinks } from '../Footer/Footer';
import { Theme, useTheme } from '~/utils/theme-provider';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

export interface OverlayProps {
  links: NavBarLink[];
  handleMenuClick: (menuState: boolean) => void;
  showMenu: boolean;
}

const Overlay: React.FC<OverlayProps> = (props): React.ReactElement => {
  const [theme, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <div className='p-5 flex flex-col justify-center items-center text-white fixed left-0 h-full w-full bg-gray-900 z-40 transition-all duration-500'>
      <div className='mb-8'>

        {theme != Theme.DARK ? <MdOutlineLightMode size={'2rem'} className='cursor-pointer hover:text-ubuntuOrange-700' onClick={toggleTheme} /> : <MdOutlineDarkMode size={'2rem'} className='cursor-pointer hover:text-ubuntuOrange-700' onClick={toggleTheme} />}
      </div>
      <ul className='flex flex-col mb-16' >

        {
          props.links.map((link, index) => {
            return (
              <li key={index} className='py-2 text-center text-2xl hover:text-ubuntuOrange-700'>
                <Link onClick={() => props.handleMenuClick(props.showMenu)} to={link.path}>{link.name}</Link>
              </li>
            )
          })
        }
      </ul >
      <hr className='w-1/2 mb-12'></hr>
      <div className='flex space-x-3'>
        {
          Object.values(socialLinks).map((socialLink, index) => {
            if (!socialLink.url) return null; return (
              <Link key={index} to={socialLink.url} className='cursor-pointer hover:text-ubuntuOrange-700'>
                <socialLink.icon size={"2rem"} />
              </Link>
            )
          })
        }
      </div>
    </div >
  );
};

export default Overlay;