import PropTypes from 'prop-types';
import TrainerBg from '../../assets/coaches/trainer-bg.png'
import angle from '../../assets/backgrounds/download.png'

const Coaches = ({image, name, description}) => {
  return (
    <div className='text-center w-72 relative flex flex-col justify-center items-center'>
      <img src={TrainerBg} alt="trainer_background" />
      <img src={image} alt="trainer_image" className="w-52 absolute top-1" />
      <img src={angle} alt="" className='absolute bottom-[92px]' />
      <div className="py-6 px-4 w-72 bg-white coaches-border">
      {/* border-b-4 border-red-500 */}
        <h2 className='text-lg font-bold'>
          {name}
        </h2>
        <p className='text-sm'>
          {description}
        </p>
      </div>
    </div>
  )
};

Coaches.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string,
}

export default Coaches;
