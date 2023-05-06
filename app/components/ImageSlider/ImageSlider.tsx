import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export interface ImageSliderProps { }

export interface slide {
    url: string,
    caption: string
}

const ImageSlider: React.FC<ImageSliderProps> = (_props): React.ReactElement => {

    const slides: slide[] = [
        {
            url: 'https://image.lexica.art/md2/01880e8b-3033-4c71-a0c4-55712eb956ca',
            caption: 'Chain link fence'
        },
        {
            url: 'https://image.lexica.art/md2/1713909b-2017-4cb9-8f6c-19daaa78c354',
            caption: 'White picket fence in Colorado Springs'
        },
        {
            url: 'https://image.lexica.art/md2/47fae1f0-1e7c-41e4-b6d0-5cbcaa06d821',
            caption: 'Blue skies a top a 6ft privacy fence'
        },
        {
            url: 'https://image.lexica.art/full_jpg/7c92e7ef-38e7-45d9-a301-8f80f59a6769',
            caption: 'Ranch style fence'
        },
        {
            url: 'https://image.lexica.art/md2/a8a4c1d6-9607-4c89-8425-476973daea2b',
            caption: 'Blue skies a top a 6ft privacy fence'
        },
    ]

    const [imageIndex, setImageIndex] = React.useState(0);

    const updateImageIndex = (increment: boolean) => {
        if (increment) {
            setImageIndex((imageIndex + 1) % slides.length);
        } else {
            setImageIndex((imageIndex - 1 + slides.length) % slides.length);
        }
    }

    return (
        <div className='flex flex-col items-center w-full' style={{ height: '500px' }}>
                <div className='mb-2 w-full h-full bg-center bg-cover duration-500 bg-black max-w-screen-md m-auto rounded-2xl' style={{ backgroundImage: `url(${slides[imageIndex].url})` }} />
            <div className='flex justify-between items-center max-w-screen-md w-full'>
                <div className='text-cyan-400 text-2xl cursor-pointer' onClick={() => updateImageIndex(false)}>
                    <MdChevronLeft size={'3em'} />
                </div>
                <div className='italic font-light text-center text-sm md:text-md -translate-y-5'>{slides[imageIndex].caption}</div>
                <div className='text-cyan-400 text-2xl cursor-pointer' onClick={() => updateImageIndex(true)}>
                    <MdChevronRight size={'3em'} className='mr-0' />
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;