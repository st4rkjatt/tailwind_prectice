import React from 'react'
import single from "../assets/single.png"
import double from "../assets/double.png"
import thr from "../assets/thi.png"
function Cards() {
    return (
        <>
            <div className='w-full py-[10rem] px-4 '>

                <div className='max-w-[1240px] mx-auto border-r grid md:grid-cols-3 gap-8 '>

                    <div className='border w-full rounded-xl py-4 my-4 shadow-xl hover:scale-105 duration-500'>
                        <img className='w-14  mx-auto mt-[-3rem] ' src={single} alt="" />
                        <h2 className='text-2xl font-bold text-center py-8 text-white'>Single User</h2>
                        <p className='text-center text-4xl font-bold text-white'>$149</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                            <p className='py-2 border-b mx-8'>1 Granted User</p>
                            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                            <button className='bg-sky-400  hover:bg-black  text-white text-lg font-bold py-2 px-2 w-32 rounded-lg my-6'>Start Trial</button>
                        </div>
                     
                    </div>

                    <div className='border w-full rounded-lg py-4 my-4 shadow-xl hover:scale-105 duration-500'>
                        <img className='w-14  mx-auto mt-[-3rem] ' src={double} alt="" />
                        <h2 className='text-2xl font-bold text-center py-8 text-white'>Single User</h2>
                        <p className='text-center text-4xl font-bold text-white'>$149</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                            <p className='py-2 border-b mx-8'>1 Granted User</p>
                            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                            <button className='bg-black hover:bg-sky-400 text-white text-lg font-bold py-2 px-2 w-32 rounded-lg my-6'>Start Trial</button>
                        </div>
                     
                    </div>

                    <div className='border w-full rounded-lg py-4 my-4 shadow-xl hover:scale-105 duration-500'>
                        <img className='w-14  mx-auto mt-[-3rem] ' src={thr} alt="" />
                        <h2 className='text-2xl font-bold text-center text-white py-8'>Single User</h2>
                        <p className='text-center text-4xl font-bold text-white'>$149</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                            <p className='py-2 border-b mx-8'>1 Granted User</p>
                            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                            <button className='bg-sky-400 hover:bg-black text-white text-lg font-bold py-2 px-2 w-32 rounded-lg my-6'>Start Trial</button>
                        </div>
                     
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards