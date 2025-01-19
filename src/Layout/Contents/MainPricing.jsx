import banner from '../../assets/gallery/gallery-banner-2.jpeg'

import BodyBuildingImage from '../../assets/classes/body-building-2.webp';
import WeightLiftingImage from '../../assets/classes/weight-lifting.webp';
import YogaImage from '../../assets/classes/yoga.jpg';
import Boxing from '../../assets/classes/boxing.jpg'
import Muaythai from '../../assets/classes/muaythai.webp';
import Fitness from '../../assets/classes/fitness.jpg';

import Pricing from '../../Components/Pricing/Pricing.jsx';

const MainPricing = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <img src={banner} alt="" className='h-32 w-full md:h-60 lg:h-72' />
                <div className='bg-red-600 py-2 md:py-4'>
                    <h1 className='text-4xl md:text-6xl font-extrabold tracking-widest text-white text-center'>
                        PRICING
                    </h1>
                </div>
            </div>
            <div className='bg-background-image-1 w-full text-white py-4'>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="tracking-wider text-[#ff0000] pt-12 text-center">PRICING CHART</h1>
                    <p className="text-black text-3xl text-center font-bold tracking-wider mt-2">
                        EXCLUSIVE PRICING PLAN
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3 mt-14 mb-14 px-8 place-items-center'>
                    <Pricing
                        title="BODY BUILDING"
                        image={BodyBuildingImage}
                        price='$80'
                    />
                    <Pricing
                        title="WEIGHT LIFTING"
                        image={WeightLiftingImage}
                        price='$80'
                    />
                    <Pricing
                        title="YOGA"
                        image={YogaImage}
                        price='$50'
                    />
                    <Pricing
                        title="BOXING"
                        image={Boxing}
                        price='$50'
                    />
                    <Pricing
                        title="MUAY THAI"
                        image={Muaythai}
                        price='$80'
                    />
                    <Pricing
                        title="FITNESS"
                        image={Fitness}
                        price='$50'
                    />
                </div>
            </div>
        </div>
    )
};

export default MainPricing;
