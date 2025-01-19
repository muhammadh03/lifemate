import banner from '../../assets/gallery/gallery-banner-2.jpeg'

// import image from '../../assets/classes/body-building-4.jpg'
import { MainClassDetails } from './MainClassDetails.js';

const MainClasses = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <img src={banner} alt="" className='h-32 w-full md:h-60 lg:h-72' />
                <div className='bg-red-600 py-2 md:py-4'>
                    <h1 className='text-4xl md:text-6xl font-extrabold tracking-widest text-white text-center'>
                        CLASSES
                    </h1>
                </div>
            </div>
            <div className='bg-background-image-1 w-full text-white py-16 px-8'>
                <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3'>
                        {MainClassDetails.map(({ image, title, day, time }, index) => (
                            <div className='relative shadow-2xl shadow-black' key={index}>
                                <img src={image} alt="" className='w-80 h-96 brightness-50' />
                                <div className='absolute bottom-28 left-10'>
                                    <h1 className='text-2xl font-bold'> {title} </h1>
                                    <div className='w-20 border-b-4 border- border-red-500 mb-2'></div>
                                    <p>
                                        {day}
                                    </p>
                                    <p>
                                        {time}
                                    </p>
                                </div>
                                <button className='absolute bottom-8 left-10 py-4 px-6 border-2 border-red-600 text-white hover:border-white hover:bg-white hover:text-black duration-300'>
                                    JOIN NOW
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainClasses;
