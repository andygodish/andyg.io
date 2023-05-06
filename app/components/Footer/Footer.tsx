import React from 'react'
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { IconContext, IconType } from 'react-icons';
import { Link } from 'react-router-dom';

export interface FooterProps { }

export interface SocialLinks {
    icon: IconType
    url: string
}

export const socialLinks: SocialLinks[] = [
    { icon: AiFillFacebook, url: ENV.FACEBOOK_URL },
    { icon: AiFillTwitterSquare, url: ENV.TWITTER_URL },
    { icon: AiFillLinkedin, url: ENV.LINKEDIN_URL },
    { icon: AiFillInstagram, url: ENV.INSTAGRAM_URL },
    { icon: AiFillGithub, url: ENV.GITHUB_URL }
];

export const appVersion = ENV.VERSION;

const Footer: React.FC<FooterProps> = (_props): React.ReactElement => {
    return (
        <div className='bottom-0 w-full shadow-sm bg-gray-900 text-white'>
            <footer className="text-white max-w-screen-xl p-5 m-auto">
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                    <div className="w-full md:w-1/3 mb-4">
                        <h3 className="text-lg font-semibold mb-3">Contact</h3>
                        <p className='text-xs mb-2'>Monday-Saturday, 9am-5pm</p>
                        <p className='text-xs mb-2'>Colorado Springs, CO</p>
                        <p className='text-xs'>719-394-7906</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <p className='text-xs mb-2'>Monday-Saturday, 9am-5pm</p>
                        <p className='text-xs mb-2'>Colorado Springs, CO</p>{/* Add your services content here */}
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                        <div className='flex space-x-3'>
                                {
                                    Object.values(socialLinks).map((socialLink, index) => {
                                        return (
                                            <Link to={socialLink.url} key={index} className='cursor-pointer'>
                                                <socialLink.icon size={"2rem"}/>
                                            </Link>
                                        )
                                    })
                                }
                   
                        </div>
                    </div>
                </div>
            </footer>
            <div className='bottom-0 w-full shadow-sm bg-black text-white'>

                <footer className='p-5 text-xs max-w-screen-xl m-auto'>
                    <div className=''><span>v{appVersion} - &copy; {new Date().getFullYear()}</span> Dr Fence | DevOps by andyg.io</div>
                </footer>
            </div>

        </div>
    );
};

export default Footer;