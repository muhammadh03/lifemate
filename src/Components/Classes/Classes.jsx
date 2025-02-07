// import image from '../../assets/classes/weight-loss.jpg'
import PropTypes from 'prop-types';

const Classes = ({image, title}) => {
    return (
        <div className='text-center '>
            <div className='bg-black shadow-xl shadow-black/50'>
                <div className="classes-image">
                    <img src={image} alt="" className='w-96 md:h-72 md:w-[500px] lg:h-60 border-b-2 border-black' />
                </div>
                <div className=" flex justify-around items-center py-4 lg:py-2 xl:py-4">
                    <h1 className='font-bold tracking-wider'>
                        {title}
                    </h1>
                    <button className='border-2 border-[#ff0000] hover:bg-[#ff0000] duration-300 py-2 px-4'>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
};

Classes.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string
};

export default Classes;
