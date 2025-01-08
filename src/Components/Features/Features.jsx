import PropTypes from 'prop-types';

const Features = ({icon, title, description}) => {
  return (
    <div className=" mb-10 mx-4 p-8 text-center flex flex-col justify-center items-center md:m-4">
      <div className="mb-6">
        {icon}
      </div>
      <h1 className='font-bold text-2xl mb-2'> 
        {title} 
      </h1>
      <p className='font-normal text-[#ff0000]'>
      {description}
      </p>
    </div>
  )
};

Features.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Features;
