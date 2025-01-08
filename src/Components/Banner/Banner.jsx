import banner from '../../assets/wallpaper-2.jpg'

const Home = () => {
  return (
    <div className='relative'>
      <img src={banner} alt="banner_image" />
      
      <div className='absolute top-36 md:top-56 lg:top-80 left-5 text-red-600'>
      {/* text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-slate-300 */}
        <h1 className='italic text-3xl md:text-5xl lg:text-7xl font-extrabold'>
          <span className='text-white'>GET</span> FIT 
          <br />
          &nbsp;&nbsp;<span className='text-white'>BE</span> STRONG
        </h1>
        
        <p className='text-white text-xl md:text-3xl lg:text-5xl'>
        {/* text-transparent bg-clip-text bg-gradient-to-l from-red-600 to-slate-300 */}
        <span className='text-red-600'>Achieve</span> Your Dreams
        </p>

        <button className="transparent border-2 border-[#ff0000] hover:bg-[#ff0000] duration-300 text-white font-bold text-xs md:text-base lg:ml-40 lg:mt-8 py-1 px-2 lg:py-2 lg:px-4 mt-2">
          OUR CLASSES
        </button>
      </div>

      {/* <div className="absolute top-90 left-10">
        <button className="bg-orange-600 py-2 px-4 rounded-sm">OUR CLASSES</button>
      </div> */}

      {/* <div className="absolute top-80 right-20">
        <p className='italic text-amber-400'>
          IF YOU SPEND TOO MUCH TIME
          <br />
          THINKING ABOUT A THING,
          <br />
          YOU'LL NEVER GET IT DONE.
        </p>
      </div> */}
    </div>
  )
};

export default Home;
