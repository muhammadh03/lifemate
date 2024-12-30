import equipment from '../../assets/equipment.png'
import plan from '../../assets/plan.png'
import trainer from '../../assets/trainer.png'
import target from '../../assets/target.png'
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";

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
    description: "Professional training plans feature certified trainers, personalized routines, progress tracking, and expert guidance for achieving fitness goals.",
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
      <div className="bg-black text-slate-200 w-full">
        <div className="flex flex-col items-center ">
        <h1 className="tracking-wider text-orange-600 mt-12">WHY CHOOSE US?</h1>
        <p className="text-3xl font-bold tracking-wider mt-2">
          {/* ENJOY OUR FEATURES */}
          EXPERIENCE OUR FEATURES
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
    </div>
  )
};

export default Contents;
