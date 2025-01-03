import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-none'>
        <div className='container text-white font-medium text-lg flex justify-between items-center px-8 h-20'>
            <div>
                <img src={logo} alt="logo" className='w-15 h-8 md:w-13 md:h-11 lg:h-16' />
            </div>

            <div className='hidden lg:block'>
                <ul className='flex items-center gap-6'>
                    <li><a href="/" className='nav-link'>Home</a></li>
                    <li><a href="/classes" className='nav-link'>Gallery</a></li>
                    <li><a href="/faq" className='nav-link'>Pricing</a></li>
                    <li><a href="/services" className='nav-link'>Classes</a></li>
                    <li><a href="/about" className='nav-link'>About</a></li>
                    <li><a href="/contact" className='nav-link'>Contact</a></li>
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
