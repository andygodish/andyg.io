import React from 'react'

export interface HeroProps { }

const Hero: React.FC<HeroProps> = (_props): React.ReactElement => {
    const app_name = ENV.APP_NAME;
    const storage_account_url = ENV.STORAGE_ACCOUNT_URL

    return (
        <div className="flex flex-col min-h-screen justify-center items-center text-center flex-grow sm:flex sm:items-center sm:justify-center bg-black"
            style={{
                // backgroundImage: `url("${storage_account_url}/testing/pikes-gog.jpg")`,
                backgroundImage: `url(https://image.lexica.art/full_jpg/81ed154d-c8ad-4110-8afc-0aaa7175bc67)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <span className='text-8xl mb-4 font-[poppins] font-bold'>{app_name}</span>
            <span className='text-6xl mb-8 font-[poppins] italic'>Professional Affordable Service</span>
            <span className='text-xl font-[poppins]'>Home Fencing Services in Colorado Springs.</span>
        </div>
    );
};

export default Hero;
