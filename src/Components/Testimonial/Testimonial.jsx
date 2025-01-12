import PropTypes from 'prop-types';
import nailImage from '../../assets/testimonial/nail-head.png'

const Testimonial = ({image, name, testimonial}) => {
  return (
    <div className='mb-16 flex flex-col justify-center items-center relative'>
      <img src={image} alt="" className='absolute top-0 w-40 h-40 rounded-full shadow-lg shadow-black' />
      <img src={nailImage} alt="" className='absolute -top-1 w-4' />
      <div className='h-72 sm:h-60 md:h-80 mt-28 bg-slate-900 text-center px-8 py-8 shadow-lg shadow-black'>
      <h2 className='mt-8 text-lg text-white font-bold'>
        {name}
      </h2>
      <p className='mt-2 text-gray-400'>
        {testimonial}
      </p>
      </div>
    </div>
  )
};

Testimonial.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
  testimonial: PropTypes.string,
};

export default Testimonial;
