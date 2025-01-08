//~~~~~~~~~~~~~~~ FEATURES ~~~~~~~~~~~~~~~//
import equipment from '../../assets/gym.png'
import plan from '../../assets/plan-1.png'
import trainer from '../../assets/trainer-1.png'
import target from '../../assets/target-1.png'

//~~~~~~~~~~~~~~~ CLASSES ~~~~~~~~~~~~~~~//
import WeightLoss from '../../assets/classes/weight-loss.jpg'
import BodyBuild from '../../assets/classes/body-building.jpg'
import WeightLift from '../../assets/classes/weight-lifting-3.jpg'

//~~~~~~~~~~~~~~~ COACHES ~~~~~~~~~~~~~~~//
import CoachOne from '../../assets/coaches/coach-7.png'
import CoachTwo from '../../assets/coaches/coach-6.png'
import CoachThree from '../../assets/coaches/coach-test-2.png'
import CoachFour from '../../assets/coaches/coach-test-1.png'


import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import Classes from '../../Components/Classes/Classes';
import Coaches from '../../Components/Coaches/Coaches'
import Pricing from '../../Components/Pricing/Pricing'

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
        {CardDetails.map(({icon, title, description}) => (
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-14 pb-16 px-8 place-items-center">
        <Classes 
        image = {WeightLoss}
        title = "WEIGHT LOSS"
        />
        <Classes 
        image = {BodyBuild}
        title =  "BODY BUILDING"
        />
        <Classes 
        image = {WeightLift}
        title = "WEIGHT LIFTING"
        />
        </div>
        {/* <div className="more-btn it">
          <button className='border-2 border-orange-600 hover:bg-orange-600 py-2 px-4'>
            MORE CLASSES
            <i className="fa-solid fa-angle-right ml-6"></i>
          </button>
        </div> */}
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
        image = {CoachOne}
        name = "Matthew Davidson"
        description = "Bodybuilding Trainer"
        />
        <Coaches 
        image={CoachTwo}
        name = "John Doe"
        description = "Personal Trainer"
        />
        <Coaches 
        image={CoachThree}
        name = "Sarah Smith"
        description = "Yoga Trainer"
        />
        <Coaches 
        image={CoachFour}
        name = "Jane Johnson"
        description = "Bodybuilding Trainer"
        />
        </div>
      </div>

      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PRICING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className='bg-background-image-4 text-white'>
        <div className="flex flex-col justify-center items-center">
          <h1 className="tracking-wider text-[#ff0000] pt-12 text-center">OUR COACHES</h1>
          <p className="text-3xl text-center font-bold tracking-wider mt-2">
            TEAM OF EXPERT TRAINERS
          </p>
        </div>
        <div>
          <Pricing />
        </div> 
      </div>
    </div>
  )
};

export default Contents;
