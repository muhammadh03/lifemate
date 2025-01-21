import banner from '../../assets/gallery/gallery-banner-2.jpeg'


const Contact = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <img src={banner} alt="" className='h-32 w-full md:h-60 lg:h-72' />
                <div className='bg-red-600 py-2 md:py-4'>
                    <h1 className='text-4xl md:text-6xl font-extrabold tracking-widest text-white text-center'>
                        CONTACT US
                    </h1>
                </div>
            </div>
            <div className='px-16 md:text-lg'>
                <div className='grid grid-cols-1 gap-14 lg:grid-cols-2'>
                    <div>
                        <div className='px-8 lg:px-0 mt-14'>
                            <h1 className="text-4xl font-bold tracking-widest text-center">
                                We are here for help you!
                                <br />
                                To Shape Your Body.
                            </h1>
                            <p className='mt-4 text-slate-500'>
                                At Lifmate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 px-8 mt-10'>
                            <div className=''>
                                <div className='mb-14'>
                                    <h1 className='text-2xl font-bold tracking-wider'>
                                        Address
                                    </h1>
                                    <div className='w-20 border-b-4 border- border-red-500'></div>
                                    <p className='mt-4 text-slate-500 tracking-wider'>
                                        123 Main St,
                                        <br />
                                        Fake City,
                                        <br />
                                        Unknown State,
                                        <br />
                                        987654 Zip
                                    </p>
                                </div>
                                <div className='mb-14'>
                                    <h1 className='text-2xl font-bold tracking-wider'>
                                        Contact Information
                                    </h1>
                                    <div className='w-20 border-b-4 border- border-red-500'></div>
                                    <p className='mt-4 text-slate-500 tracking-wider'>
                                        (123) 456-7890
                                        <br />
                                        support@lifemate.com
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className='mb-14'>
                                    <h1 className='text-2xl font-bold tracking-wider'>
                                        Opening Hours
                                    </h1>
                                    <div className='w-20 border-b-4 border- border-red-500'></div>
                                    <p className='mt-4 text-slate-500 tracking-wider'>
                                        Monday - Friday:
                                        <br />
                                        9 AM - 5 PM
                                        <br />
                                        Saturday: 10 AM - 3 PM
                                        <br />
                                        Sunday: Closed
                                    </p>
                                </div>
                                <div className='mb-14'>
                                    <h1 className='text-2xl font-bold tracking-wider'>
                                        Social Media
                                    </h1>
                                    <div className='w-20 border-b-4 border- border-red-500'></div>
                                    <div className='text-slate-500'>
                                        <a href='#'>
                                            <i className="fab fa-facebook-square text-3xl mt-4 mr-4 hover:text-red-600"></i>
                                        </a>
                                        <a href='#'>
                                            <i className="fab fa-instagram text-3xl mt-4 mr-4 hover:text-red-600"></i>
                                        </a>
                                        <a href='#'>
                                            <i className="fab fa-twitter text-3xl mt-4 mr-4 hover:text-red-600"></i>
                                        </a>
                                        <a href='#'>
                                            <i className="fab fa-youtube text-3xl mt-4 mr-4 hover:text-red-600"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='px-8 lg:px-0 mt-14'>
                            <h1 className='text-2xl font-bold tracking-wider'>
                                Leave Us Your Info
                            </h1>
                            <div className='w-20 border-b-4 border- border-red-500'></div>
                            <form className='mt-6'>
                                <div className='mb-4'>
                                    <label htmlFor='name'></label>
                                    <input type='text' id='name' className='border-2 border-red-600 px-4 w-full py-2 mb-4' placeholder='Name *' required />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='email'></label>
                                    <input type='email' id='email' className='border-2 border-red-600 px-4 w-full py-2 mb-4' placeholder='Email *' required />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='phone'></label>
                                    <input type='tel' id='phone' className='border-2 border-red-600 px-4 w-full py-2 mb-4' placeholder='Phone *' required />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='subject'></label>
                                    <select name="class" id="class" className='border-2 border-red-600 py-3 px-2 mb-4 w-full'>
                                        <option value="">Select a Class </option>
                                        <option value="1">Body Building</option>
                                        <option value="2">Weight Lifting</option>
                                        <option value="3">Yoga</option>
                                        <option value="4">Fitness</option>
                                        <option value="5">Boxing</option>
                                        <option value="6">Muay Thai</option>
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='message'></label>
                                    <textarea id='message' className='border-2 border-red-600 px-4 py-2 w-full h-32' placeholder='Message *' required></textarea>
                                </div>
                                <div>
                                    <button type='submit' className='py-2 px-6 md:py-3 md:px-10  border-2 border-red-600 text-slate-400 mb-8 hover:bg-red-600'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Location */}
            <div className="w-full h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31683.020436056063!2d79.85776832940857!3d6.843126697951282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25ba4c1925c19%3A0xc9f426674d5172e3!2sDehiwala-Mount%20Lavinia%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1674734003025!5m2!1sen!2sus"
                    className="w-full h-full border-0"
                    allowfullscreen=""
                    loading="lazy"
                    // eslint-disable-next-line react/no-unknown-property
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
};

export default Contact;
