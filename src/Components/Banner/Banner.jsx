import banner from '../../assets/wallpaperflare.com_wallpaper.jpg'

const Home = () => {
  return (
    <div className='relative'>
      <img src={banner} alt="banner_image" />
      
      <div className='absolute top-36 md:top-56 lg:top-80 left-5  text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-400 to-slate-300'>
        <h1 className='italic text-3xl md:text-5xl lg:text-7xl font-extrabold'>GET FIT 
          <br />
          &nbsp;&nbsp;BE STRONG
        </h1>
        
        <p className='text-transparent bg-clip-text bg-gradient-to-l from-orange-600 via-orange-400 to-slate-300 text-xl md:text-3xl lg:text-5xl'>Achieve Your Dreams</p>

        <button className="bg-orange-600 hover:bg-transparent border-2 border-orange-600 duration-300 text-white font-bold text-xs md:text-base lg:ml-40 lg:mt-8 py-1 px-2 lg:py-2 lg:px-4 mt-2">OUR CLASSES</button>
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
