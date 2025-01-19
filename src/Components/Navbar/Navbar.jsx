import { Link } from 'react-router-dom';
import logo from '../../assets/logo-3.png';

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-none'>
        <div className='container text-white font-medium text-lg flex justify-between items-center px-8 h-20'>
            <div>
                <img src={logo} alt="logo" className='w-15 h-8 md:w-13 md:h-11 lg:h-16' />
            </div>

            <div className='hidden lg:block'>
                <ul className='flex items-center gap-6'>
                    <li>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className='nav-link'>Gallery</Link>
                    </li>
                    <li>
                        <Link to="/pricing" className='nav-link'>Pricing</Link>
                    </li>
                    <li>
                        <Link to="/classes" className='nav-link'>Classes</Link>
                    </li>
                    <li>
                        <Link to="/schedule" className='nav-link'>Schedule</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='nav-link'>Contact</Link>
                    </li>
                </ul>
            </div>

            <button className='nav-btn hidden lg:block'>
            JOIN
            </button>

            {/* Mobile hamburger Menu section */}
            <div className='text-xl sm:text-3xl cursor-pointer z-50 lg:hidden'>
                <i className="fa-solid fa-bars text-3xl"></i>
            </div>
        </div>
    </nav>
  )
};

export default Navbar;
