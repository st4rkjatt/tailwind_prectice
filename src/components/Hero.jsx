import React from 'react'
import Typed from 'react-typed';

function Hero() {
    return (
        <>
            <div className='text-white max-w-[700px] w-full h-[500px] mx-auto text-center mt-20 flex flex-col '>
                <p className='uppercase font-bold text-sky-400 p-2'>Grow with data Analytics</p>
                <h1 className='uppercase md:text-5xl lg:text-6xl  text-sky-500 mb-3 text-4xl font-bold'>grow with OM</h1>
                <div className='flex  justify-center text-center'>
                    <p className='text-lg font-bold pr-2  md:text-xl'>fast, flexible financing for</p>
                    <Typed
                    className='text-xl font-bold md:text-2xl lg:text-2xl'
                        strings={[
                            'BTB', 'SASS', 'PPA'
                        ]}
                        typeSpeed={140}
                        backSpeed={150}

                        loop >

                    </Typed>
                   
                </div>
                <p className='text-lg font-bold md:text-xl sm:px-16 py-4'>process of examining data sets in order to find trends and draw conclusions about the information they contain.</p>

                <p className='bg-sky-500 w-[200px] rounded-lg font-bold text-lg py-3 mx-auto'>Get Started</p>
            </div>




        </>
    )
}

export default Hero