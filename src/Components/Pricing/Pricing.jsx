import PropTypes from 'prop-types';

const Pricing = ({title, image, price}) => {
  return (
    <div className='relative group lg:w-fit overflow-hidden flex flex-col justify-center items-center mb-4 shadow-2xl shadow-black'>
        <img src={image} alt="" className='w-96 h-64 md:h-80 md:w-[500px] lg:w-[23rem] lg:h-64' />
        {/* <div></div> */}
        <div className='absolute inset-0'>
            <span className="price-span font-bold italic bg-slate-900 py-2 px-6 absolute top-4 right-9">
                {price} <small className='font-light'>P/M</small>
            </span>
            <h1 className="price-title font-bold italic bg-white text-black  py-2 px-12 absolute bottom-0 left-0">
                {title}
            </h1>
        </div>
    </div>
  )
};

Pricing.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
}

export default Pricing;
