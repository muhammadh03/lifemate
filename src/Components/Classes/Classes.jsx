// import image from '../../assets/classes/weight-loss.jpg'
import PropTypes from 'prop-types';

const Classes = ({image, title}) => {
    return (
        <div className='text-center w-fit'>
            <div className='bg-black shadow-xl shadow-black/50'>
                <div className="image">
                    <img src={image} alt="" className='h-52  border border-black' />
                </div>
                <div className=" flex justify-around items-center py-4">
                    <h1 className='font-bold tracking-wider'>
                        {title}
                    </h1>
                    <button className='border-2 border-orange-600 hover:bg-orange-600 py-2 px-4'>
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
