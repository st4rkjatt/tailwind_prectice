import React from 'react'
import { useState } from 'react';
// import { GrMenu,GiCrossedSwords } from 'react-icons/fa';
import { FaAlignJustify,FaTimes } from 'react-icons/fa';

function Navbar() {


    const [nav,setNav]=useState(true)

    const handleNav=()=>{
        setNav(!nav)

    }
    return (
        <>
            <div className='text-white justify-between  flex items-center h-24 max-w-[1640px] mx-auto bg-sky-300 rounded-lg     '>
                <h1 className=' font-extrabold text-4xl mx-10 '>Stark</h1>

                <ul className=' mx-6 font-bold text-lg hidden md:flex'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Service</li>
                    <li className='p-4'>Product</li>
                    <li className='p-4'>Constact Us</li>

                </ul>
                <div onClick={handleNav} className="md:hidden"> 
                
                            {nav!=false?<><FaAlignJustify size={30} /></>:<FaTimes size={30}/>}
                
                
                 </div>

                <div className={!nav?"fixed left-0 top-0 sm:w-[46%] md:w-[40%]  h-full border-r bg-sky-300":"fixed left-[-100%] ease-in-out duration-500"}>
                    <h1 className=' font-extrabold text-4xl p-4 '>React</h1>
                    <ul className='pt-4 uppercase'>


                        <li className='p-4 border-b border-gray-400 mx-3' >Home</li>
                        <li className='p-4 border-b border-gray-400 mx-3' >About</li>
                        <li className='p-4 border-b border-gray-400 mx-3' >Service</li>
                        <li className='p-4 border-b border-gray-400 mx-3' >Product</li>
                        <li className='p-4'>Constact Us</li>


                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar