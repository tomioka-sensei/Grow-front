import { useState } from "react"
import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"

const NavBar = () => {

  
  const [drop, setDrop] = useState(false);
 
  let down = ()=>{
  setDrop(!drop)
  }




  return (
    <div className='text-white justify-between flex items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00fd9a] '>Grow.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={down} className="block md:hidden">
          {!drop?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
                </div>
        <div className={!drop?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00fd9a] '>Grow.</h1>
          <ul className=' uppercase bg-[#000300] p-4'>
          <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
          </ul>

        </div>
    </div>
  );
};

export default NavBar