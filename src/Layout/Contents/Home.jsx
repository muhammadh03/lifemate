//~~~~~~~~~~~~~~~ FEATURES ~~~~~~~~~~~~~~~//
import equipment from '../../assets/gym.png';
import plan from '../../assets/plan-1.png';
import trainer from '../../assets/trainer-1.png';
import target from '../../assets/target-1.png';

//~~~~~~~~~~~~~~~ CLASSES ~~~~~~~~~~~~~~~//
import Yoga from '../../assets/classes/yoga-1.jpg';
import BodyBuild from '../../assets/classes/body-building.jpg';
import WeightLift from '../../assets/classes/weight-lifting-3.jpg';

//~~~~~~~~~~~~~~~ COACHES ~~~~~~~~~~~~~~~//
import CoachOne from '../../assets/coaches/coach-7.png';
import CoachTwo from '../../assets/coaches/coach-6.png';
import CoachThree from '../../assets/coaches/coach-test-2.png';
import CoachFour from '../../assets/coaches/coach-test-1.png';

//~~~~~~~~~~~~~~~ PRICES ~~~~~~~~~~~~~~~//
import BodyBuildingImage from '../../assets/classes/body-building-2.webp';
import WeightLiftingImage from '../../assets/classes/weight-lifting.webp';
import YogaImage from '../../assets/classes/yoga.jpg';

//~~~~~~~~~~~~~~~ GALLERY ~~~~~~~~~~~~~~~//
import GalleryImageOne from '../../assets/classes/body-building-2.webp';
import GalleryImageTwo from '../../assets/classes/weight-lifting-3.jpg';
import GalleryImageThree from '../../assets/classes/yoga.jpg';
import GalleryImageFour from '../../assets/classes/rope-cadio-1.webp';
import GalleryImageFive from '../../assets/classes/weight-loss-2.jpg';

//~~~~~~~~~~~~~~~ BMI CALCULATOR IMAGE ~~~~~~~~~~~~~~~//
import BmiImage from '../../assets/classes/workout-with-kattlebell.jpg'

import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import Classes from '../../Components/Classes/Classes';
import Coaches from '../../Components/Coaches/Coaches';
import Pricing from '../../Components/Pricing/Pricing';
import BMICalculator from '../../Components/BMICalculator/BMICalculator';
// import Gallery from '../../Components/Gallery/Gallery'

const CardDetails = [
  {
    icon: <img src={equipment} alt="" className='size-20' />,
    title: "Mod Equipment",
    description: "Modern gym equipment includes advanced machines, innovative technology, and versatile tools for effective, efficient workouts.",
  },
  {
    icon: <img src={plan} alt="" className='size-20' />,
    title: "Nutrition Plan",
    description: "Personalized nutrition plans ensure balanced meals, boost energy, enhance recovery, and support sustainable health goals.",
  },
  {
    icon: <img src={trainer} alt="" className='size-20' />,
    title: "Pro Workout Plan",
    description: "Pro training plans feature certified trainers, personalized routines, progress tracking, and expert guidance for achieving fitness goals.",
  },
  {
    icon: <img src={target} alt="" className='size-20' />,
    title: "Unique to needs",
    description: "Customized fitness plans tailored to your goals, preferences, and abilities for a personalized, effective workout experience.",
  }
]
const Contents = () => {
  return (
    <div>
      <Banner />

      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FEATURES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="bg-background-image-1 w-full">
        <div className="flex flex-col items-center ">
          <h1 className="tracking-wider text-[#ff0000] mt-12">WHY CHOOSE US?</h1>
          <p className="text-3xl text-center font-bold tracking-wider mt-2">
            {/* ENJOY OUR FEATURES */}
            OUR FEATURES
            {/* EXPERIENCE OUR FEATURES */}
          </p>
          {/* <p>
          State-of-the-art equipment, certified trainers, group classes, personalized programs, and modern facilities for every fitness goal
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {CardDetails.map(({ icon, title, description }) => (
            <Features
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>

      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CLASSES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="bg-background-image-2 text-slate-200 w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="tracking-wider text-[#ff0000] mt-12">
            OUR CLASSES
          </h1>
          <p className="text-3xl text-center font-bold tracking-wider mt-2">
            WHAT WE OFFER
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3 mt-14 pb-16 px-8 place-items-center">
          <Classes
            image={Yoga}
            title="YOGA"
          />
          <Classes
            image={BodyBuild}
            title="BODY BUILDING"
          />
          <Classes
            image={WeightLift}
            title="WEIGHT LIFTING"
          />
        </div>
        <div className="more-btn w-full">
          <button className='bg-[#ff0000] hover:bg-red-600 w-full py-6 px-4 font-bold'>
            MORE CLASSES
            <i className="fa-solid fa-angle-right ml-6"></i>
          </button>
        </div>
      </div>

      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COACHES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className='bg-background-image-3 w-full flex flex-col justify-center items-center'>
        <div className="flex flex-col justify-center items-center">
          <h1 className="tracking-wider text-[#ff0000] pt-12 text-center">OUR COACHES</h1>
          <p className="text-3xl text-center font-bold tracking-wider mt-2">
            TEAM OF EXPERT TRAINERS
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-14 mb-14 px-8 md:grid-cols-2 lg:grid-cols-4 ">
          <Coaches
            image={CoachOne}
            name="Matthew Davidson"
            description="Bodybuilding Trainer"
          />
          <Coaches
            image={CoachTwo}
            name="John Doe"
            description="Personal Trainer"
          />
          <Coaches
            image={CoachThree}
            name="Sarah Smith"
            description="Yoga Trainer"
          />
          <Coaches
            image={CoachFour}
            name="Jane Johnson"
            description="Bodybuilding Trainer"
          />
        </div>
      </div>

      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PRICING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className='bg-background-image-4 text-white'>
        <div className="flex flex-col justify-center items-center">
          <h1 className="tracking-wider text-[#ff0000] pt-12 text-center">OUR PRICES</h1>
          <p className="text-3xl text-center font-bold tracking-wider mt-2">
            CHOICE IS YOURS
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
          {/* <Pricing /> */}
        </div>
        <div className="more-btn w-full">
          <button className='bg-[#ff0000] hover:bg-red-600 w-full py-6 px-4 font-bold'>
            MORE CLASSES & PRICES
            <i className="fa-solid fa-angle-right ml-6"></i>
          </button>
        </div>
      </div>

      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GALLERY ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className='bg-background-image-3'>
        <div className="flex flex-col justify-center items-center">
          <h1 className="tracking-wider text-[#ff0000] pt-12 text-center">LIFEMATE GALLERY</h1>
          <p className="text-3xl text-center font-bold tracking-wider mt-2">
            OUR WORKPLACE GALLERY
          </p>
        </div>
        <div className='px-8'>
          <div className="grid grid-col-1 md:grid-cols-8 md:grid-rows-4 lg:grid-rows-5 gap-4 py-14">
            <div className=" bg-red-500 col-span-4 row-span-3">
              {/* This is 01 */}
              <img src={GalleryImageOne} alt="" className='w-full h-full object-cove' />
            </div>
            <div className=" bg-red-700 col-span-4 row-span-2">
              {/* This is 02 */}
              <img src={GalleryImageTwo} alt="" className='w-full h-full object-cove' />
            </div>
            <div className=" bg-red-950 col-span-4 row-span-3">
              {/* This is 03 */}
              <img src={GalleryImageThree} alt="" className='w-full h-full object-cove' />
            </div>
            <div className=" bg-slate-500 col-span-2 row-span-2">
              {/* This is 04 */}
              <img src={GalleryImageFour} alt="" className='w-full h-full object-cove' />
            </div>
            <div className=" bg-slate-700 col-span-2 row-span-2">
              {/* This is 05 */}
              <img src={GalleryImageFive} alt="" className='w-full h-full object-cove' />
            </div>
            {/* <div className="p-10 bg-slate-900 ">This is 06</div>
            <div className="p-10 bg-blue-500 ">This is 07</div>
            <div className="p-10 bg-blue-800 ">This is 08</div>
            <div className="p-10 bg-blue-950">This is 09</div>
            <div className="p-10 bg-green-500 ">This is 10</div>
            <div className="p-10 bg-green-700 ">This is 11</div>
            <div className="p-10 bg-green-900 ">This is 12</div>
            <div className="p-10 bg-yellow-500 ">This is 13</div>
            <div className="p-10 bg-yellow-700 ">This is 14</div>
            <div className="p-10 bg-yellow-900 ">This is 15</div>
            <div className="p-10 bg-pink-500 ">This is 16</div>
            <div className="p-10 bg-pink-700 ">This is 17</div>
            <div className="p-10 bg-pink-900 ">This is 18</div>
            <div className="p-10 bg-gray-500 ">This is 19</div>
            <div className="p-10 bg-gray-700 ">This is 20</div> */}
          </div>
        </div>
      </div>

      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ BMI CALCULATOR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className='bg-black text-white flex md:justify-center md:items-center lg:justify-between relative'>
        {/* <div className="flex flex-col justify-center items-center">
          <h1 className="tracking-wider text-[#ff0000] pt-12 text-center">LIFEMATE CALCULATOR</h1>
          <p className="text-3xl text-center font-bold tracking-wider mt-2">
            WHAI IS YOUR <span className='text-red-600'>BODY MASS INDEX</span>
          </p>
        </div> */}
        <div className='md:px-8 pt-10 absolute lg:relative lg:left-0'>
          <BMICalculator />
        </div>
        <img src={BmiImage} alt="image" className='h-80 w-full md:h-full lg:h-96 lg:w-fit' />
      </div>
    </div>
  )
};

export default Contents;