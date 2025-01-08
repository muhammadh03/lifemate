import image from '../../assets/classes/body-building-2.webp'

const Pricing = () => {
  return (
    <div>
        <img src={image} alt="" className='w-1/3' />
        <div>
        <h1>$70 <small>P/M</small></h1>
        </div>
        <div className='bg-black'>
            <h1>BODY BUILDING</h1>
        </div>
    </div>
  )
};

export default Pricing;
