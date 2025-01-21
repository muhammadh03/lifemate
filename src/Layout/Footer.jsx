import { Link } from 'react-router-dom';
import Logo from '../assets/logo-3.png';

const Footer = () => {
    return (
        <div className="bg-black text-gray-500 p-14">
            <div className='grid grid-cols-1 gap-10 md:gap-40 md:grid-cols-3 lg:grid-cols-3'>
                <div className=''>
                    <img src={Logo} alt="" className='w-48' />
                    <div className=''>
                        <p className='py-6'>
                            Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                        </p>
                        <p>
                            © 2025 LifeMate | All rights reserved.
                            <br />
                            Terms & Conditions
                            <br />
                            Privacy Policy
                            <br />
                            Design by MHD Template Carpenter
                        </p>
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-2xl font-bold tracking-wider'>
                        Our Classes
                    </h1>
                    <div className='w-20 border-b-4 border- border-red-500 '></div>
                    <ul className='mt-4'>
                        <li className='mb-3 hover:text-red-500'>
                            <Link to="/classes">Fitness Classes</Link>
                        </li>
                        <li className='mb-3 hover:text-red-500'>
                            <Link to="/classes">Yoga Classes</Link>
                        </li>
                        <li className='mb-3 hover:text-red-500'>
                            <Link to="/classes">Boxing Classes</Link>
                        </li>
                        <li className='mb-3 hover:text-red-500'>
                            <Link to="/classes">Muaythai Classes</Link>
                        </li>
                        <li className='mb-3 hover:text-red-500'>
                            <Link to="/classes">Bodybuilding Classes</Link>
                        </li>
                        <li className='mb-3 hover:text-red-500'>
                            <Link to="/classes">Weight Lifting Classes</Link>
                        </li>
                    </ul>
                </div>

                <div className=''>
                    <h1 className='text-2xl font-bold tracking-wider'>
                        Working Hours
                    </h1>
                    <div className='w-20 border-b-4 border- border-red-500'></div>
                    <p className='mt-4 tracking-wider'>
                        Monday - Friday:
                    </p>
                    <p className='tracking-wider'>
                        9:00 AM - 9:00 PM
                    </p>
                    <p className='mt-4 tracking-wider'>
                        Saturday:
                    </p>
                    <p className='tracking-wider'>
                        9:00 AM - 6:00 PM
                    </p>
                    <p className='mt-4 text-gray-400 font-bold tracking-wider'>
                        Sunday: Closed
                    </p>
                </div>
            </div>

            {/* <div className='grid grid-cols-1 gap-10 md:grid-cols-2 mt-4'>
                <div className='mt-6'>
                    <h1 className='text-2xl font-bold tracking-wider'>
                        Contact Us
                    </h1>
                    <div className='w-20 border-b-4 border- border-red-500'></div>
                    <p className='mt-4 tracking-wider'>
                        Address: 123 Main St, City, State, Zip
                    </p>
                    <p className='tracking-wider'>
                        Phone: (123) 456-7890
                    </p>
                    <p className='mt-4 tracking-wider'>
                        Email: support@lifemate.com
                    </p>
                </div>

                
            </div> */}
        </div>
    )
};

export default Footer;
