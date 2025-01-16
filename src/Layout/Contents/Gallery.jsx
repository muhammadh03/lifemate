import banner from '../../assets/gallery/gallery-banner-2.jpeg'

import GalleryImageOne from '../../assets/gallery/gallery-1.webp';
import GalleryImageTwo from '../../assets/gallery/gallery-2.jpg';
import GalleryImageThree from '../../assets/gallery/gallery-3.jpg';
import GalleryImageFour from '../../assets/gallery/gallery-4.webp';
import GalleryImageFive from '../../assets/gallery/gallery-5.jpg';
import GalleryImageSix from '../../assets/gallery/gallery-6.jpg';
import GalleryImageSeven from '../../assets/gallery/gallery-7.jpeg';
import GalleryImageEight from '../../assets/gallery/gallery-8.jpeg';
import GalleryImageNine from '../../assets/gallery/gallery-9.jpeg';
import GalleryImageTen from '../../assets/gallery/gallery-10.jpeg';
import GalleryImageEleven from '../../assets/gallery/gallery-11.jpeg';
import GalleryImageTwelve from '../../assets/gallery/gallery-12.jpeg';

const Gallery = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <img src={banner} alt="" className='h-32 w-full md:h-60 lg:h-72' />
                <div className='bg-red-600 py-2 md:py-4'>
                    <h1 className='text-4xl md:text-6xl font-extrabold tracking-widest text-white text-center'>
                        GALLERY
                    </h1>
                </div>
            </div>
            <div className='px-8 py-8 md:py-14'>
                <div className="grid grid-col-1 md:grid-cols-8 md:grid-rows-4 lg:grid-rows-4 gap-4 mb-4">
                    <div className="col-span-4 row-span-3">
                        <img src={GalleryImageOne} alt="" className='w-full h-full object-cove' />
                    </div>
                    <div className="col-span-4 row-span-2">
                        <img src={GalleryImageTwo} alt="" className='w-full h-full object-cove' />
                    </div>
                    <div className="col-span-4 row-span-3">
                        <img src={GalleryImageThree} alt="" className='w-full h-full object-cove' />
                    </div>
                    <div className="col-span-2 row-span-2">
                        <img src={GalleryImageFour} alt="" className='w-full h-full object-cove' />
                    </div>
                    <div className="col-span-2 row-span-2">
                        <img src={GalleryImageFive} alt="" className='w-full h-full object-cove' />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-4 gap-4 ">
                    <div className=" bg-red-500 col-span-2 row-span-2">
                        <img src={GalleryImageSix} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className=" bg-red-700 row-span-2">
                        <img src={GalleryImageSeven} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className=" bg-red-950 row-span-2">
                        <img src={GalleryImageEight} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className=" bg-slate-500 row-span-2">
                        <img src={GalleryImageNine} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className=" bg-slate-700 row-span-2">
                        <img src={GalleryImageTen} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className=" bg-slate-900 col-span-2">
                        <img src={GalleryImageEleven} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className=" bg-blue-500 col-span-2">
                        <img src={GalleryImageTwelve} alt="" className='w-full h-full object-cover' />
                    </div>
                    {/* <div className="p-20 bg-blue-800 ">This is 08</div> */}
                    {/* <div className="p-20 bg-blue-950">This is 09</div> */}
                    {/* <div className="p-20 bg-green-500">This is 10</div> */}
                    {/* <div className="p-20 bg-green-800">This is 11</div>
                    <div className="p-20 bg-green-950">This is 12</div> */}
                </div>
            </div>
        </div>
    )
};

export default Gallery;
