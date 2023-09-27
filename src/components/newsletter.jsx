import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='mx-auto max:w-[1240px] lg:grid-cols-3 '>
            <div className='lg:col-span-2'>
            <h1 className='md:text-5xl sm:text-4xl text-2xl py-2 '>
                Suggestion regarding finance management
            </h1>
            <p>
                Sign up for news letter and stay updated
            </p>
            </div>
            <div className='my-4'>
                <div >
                    <input className='p-3 w-full text-black flex rounded-md'
                    type='email'
                    placeholder='Enter e-mail'
                    ></input>

                    <button className='bg-[#00fd9a] w-[150px] font-bold text-black rounded-md content-center mx-auto my-6 py-3 '> Submit</button>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Newsletter