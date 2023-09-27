import React from 'react';
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-width-[800px] mt-[-96px] w-full h-screen mx-auto justify-center text-center flex flex-col'>
            <p className='text-[#00fd9a] font-bold p-2'>Start Growing With Grow</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Save for future</h1>
            <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                Start your SIP with 
            </p>
            <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={["100","500","or more"]}
            typeSpeed={140}
            backSpeed={130}
            loop
            />
            </div>
            <p className='md:text-2xl text-xl font-bold  text-gray-500'>Track your sip rates and invest in as many sips you want</p>
               <button className='bg-[#00fd9a] w-[150px] font-bold text-black rounded-md content-center mx-auto my-6 py-3 '>Get Started</button>
        </div>


    </div>
  )
}

export default Hero