import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../../assets/logo-3.png';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <nav className={`w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-none ${isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"}`}>
            <div className='relative container text-white font-medium text-lg flex justify-between items-center px-8 h-20'>
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
                <div className='cursor-pointer z-50 lg:hidden'>
                    <button onClick={toggleMenu}>
                    {isOpen ? <i className="fa-solid fa-xmark sm:text-2xl text-red-600"></i> :
                    <i className="fa-solid fa-bars text-xl sm:text-2xl text-red-600"></i>}
                    </button>
                </div>

                {/* Hamburger Menu for Small Screens
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            ></path>
                        </svg>
                    </button>
                </div> */}

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='w-full lg:hidden bg-black bg-opacity-90 absolute top-20 left-0'>
                        <ul className='flex flex-col items-center p-8 space-y-4'>
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
                )
                }
            </div>
        </nav>
    )
};

export default Navbar;
