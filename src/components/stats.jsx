import React from 'react'
import Finance from "../assets/Finance.png"

function Stats() {
  return (
    <div className='bg-white py-6 w-full px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4'   src={Finance} alt='reload'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00fd9a] font-bold '>
                    Track market rates
                </p>
                <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold py-2'>Select the plan that suits you</h1>
                <h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit placeat, 
                        ipsa, id, quis quam fuga fugit ullam corporis asperiores odit 
                        commodi? Enim, molestiae.
                    </p>
                </h1>
                <button className='bg-black w-[150px] font-bold text-[#00fd9a] rounded-md content-center mx-auto my-6 py-3'>Get Started</button>
            </div>


        </div>

    </div>
  )
}

export default Stats