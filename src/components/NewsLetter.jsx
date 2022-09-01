import React from 'react'

function NewsLetter() {
    return (
        <>
            <div className='w-full  px-4 mt-44 md:mt-0 lg:mt-0 py-32 bg-white'>

                <div className='max-w-[1240px] mx-auto grid  lg:grid-cols-3'>
                  <div className='lg:col-span-2  '>

                    <h1 className='text-2xl lg:text-4xl  font-bold py-2'>Want to tricks and tricks to optimize your code?</h1>
                    <p>signup to our newsletter and stay up do date</p>
                  </div>

                  <div className='my-4'>
                    <div className='flex  flex-col sm:flex-row items-center  justify-between'>
                        <input className='p-3 flex w-full bg-slate-600 rounded-md text-black' type="email" placeholder='Enter the email' />
                        <button className='bg-sky-400 text-white my-2 text-xl font-bold py-3 px-2 ml-3 w-52 rounded-lg'>Notify Me</button>
                    </div>
                    <p>we care about the protection of your data read our <span className='text-sky-400'>Privacy Policy</span></p>
                  </div>
                </div>
            </div>

        </>
    )
}

export default NewsLetter