import banner from '../../assets/gallery/gallery-banner-2.jpeg'

const Schedule = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <img src={banner} alt="" className='h-32 w-full md:h-60 lg:h-72' />
                <div className='bg-red-600 py-2 md:py-4'>
                    <h1 className='text-4xl md:text-6xl font-extrabold tracking-widest text-white text-center'>
                        SCHEDULE
                    </h1>
                </div>
            </div>
            <div className='bg-background-image-1 w-full'>
                <div className='px-8'>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="tracking-wider text-[#ff0000] pt-12 text-center">TIMING CHART</h1>
                        <p className="text-black text-3xl text-center font-bold tracking-wider mt-2">
                            CHOOSE YOUR COMFORTABLE
                        </p>
                    </div>
                    <table className='table-auto border-collapse border border-gray-700 w-full text-left italic my-8'>
                        <thead className='bg-slate-800 text-white'>
                            <tr>
                                <th className='py-6 px-4'>Time</th>
                                <th className='py-6 px-4'>Monday</th>
                                <th className='py-6 px-4'>Tuesday</th>
                                <th className='py-6 px-4'>Wednesday</th>
                                <th className='py-6 px-4'>Thursday</th>
                                <th className='py-6 px-4'>Friday</th>
                                <th className='py-6 px-4'>Saturday</th>
                                <th className='py-6 px-4'>Sunday</th>
                            </tr>
                        </thead>
                        <tbody className='bg-slate-800 text-red-600'>
                            <tr>
                                <td className='py-6 px-4 border border-gray-700'>9 AM <br />to<br /> 12 PM</td>
                                <td className='py-6 px-4 border border-gray-700'>WEIGHT LIFTING</td>
                                <td className='py-6 px-4 border border-gray-700'></td>
                                <td className='py-6 px-4 border border-gray-700'></td>
                                <td className='py-6 px-4 border border-gray-700'>WEIGHT LIFTING</td>
                                <td className='py-6 px-4 border border-gray-700'></td>
                                <td className='py-6 px-4 border border-gray-700'></td>
                                <td className='py-6 px-4 border border-gray-700'>CLOSED</td>
                            </tr>
                            <tr>
                                <td className='p-6 px-4 border border-gray-700'>5 PM <br />to<br /> 6 PM</td>
                                <td className='p-6 px-4 border border-gray-700'></td>
                                <td className='p-6 px-4 border border-gray-700'>YOGA</td>
                                <td className='p-6 px-4 border border-gray-700'></td>
                                <td className='p-6 px-4 border border-gray-700'>YOGA</td>
                                <td className='p-6 px-4 border border-gray-700'></td>
                                <td className='p-6 px-4 border border-gray-700'>YOGA</td>
                                <td className='p-6 px-4 border border-gray-700'>CLOSED</td>
                            </tr>
                            <tr>
                                <td className='p-6 px-4 border border-gray-700'>7 PM <br />to<br /> 9 PM</td>
                                <td className='p-6 px-4 border border-gray-700'></td>
                                <td className='p-6 px-4 border border-gray-700'>BOXING</td>
                                <td className='p-6 px-4 border border-gray-700'></td>
                                <td className='p-6 px-4 border border-gray-700'></td>
                                <td className='p-6 px-4 border border-gray-700'>BOXING</td>
                                <td className='p-6 px-4 border border-gray-700'></td>
                                <td className='p-6 px-4 border border-gray-700'>CLOSED</td>
                            </tr>
                            <tr>
                                <td className='py-6 px-4 border border-gray-700'>3 AM <br />to<br /> 6 PM</td>
                                <td className='py-6 px-4 border border-gray-700'></td>
                                <td className='py-6 px-4 border border-gray-700'></td>
                                <td className='py-6 px-4 border border-gray-700'>MUAY THAI</td>
                                <td className='py-6 px-4 border border-gray-700'></td>
                                <td className='py-6 px-4 border border-gray-700'></td>
                                <td className='py-6 px-4 border border-gray-700'>MUAY THAI</td>
                                <td className='py-6 px-4 border border-gray-700'>CLOSED</td>
                            </tr>
                            {/* <tr>
                                <td className='p-6 px-4 border border-gray-700'>9 AM <br />to<br /> 9 PM</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>CLOSED</td>
                            </tr>
                            <tr>
                                <td className='p-6 px-4 border border-gray-700'>9 AM <br />to<br /> 9 PM</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>BODY BUILDING</td>
                                <td className='p-6 px-4 border border-gray-700'>CLOSED</td>
                            </tr> */}
                        </tbody>
                    </table>
                    <div className='pb-8 italic'>
                        <p>
                            Note :-
                        </p>
                        <h1 className='font-bold text-red-600'>BODY BUILDING & FITNESS TRAINING</h1>
                        <p>
                            <span className='text-red-600'>** </span>
                            Every day of the week Monday to Saturday
                            <span className='text-red-600'> **</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Schedule;
