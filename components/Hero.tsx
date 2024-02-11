import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find and Book a Car Quickly and Easily
                in your Next Vacation in Cebu!
            </h1>    

            <p className='hero__subtitle'>
            Escape the ordinary. Your next adventure awaits.
            </p>

            <CustomButton
            title="Explore options"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={}
            />
        </div>      
    
    </div>
  )
}

export default Hero