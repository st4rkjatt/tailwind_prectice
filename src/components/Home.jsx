import React from 'react'

function Home() {
  return (
    <>
      <h1 className=' mb-1 text-center capitalize text-4xl font-semibold text-sky-500'>Our Services</h1>
      <hr className='w-1/5 mx-auto border-2  border-white' />

      <div className='grid grid-cols-1 md:grid-cols-2  md:gap-4 md:px-6 lg:grid-cols-3 lg:gap-5 justify-items-center mt-10'>
        <div className='py-10'>
          <div className='rounded-lg shadow-2xl max-w-md '>
            <img src="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg" alt="mountain" className='w-full rounded-lg' />

            <div className='px-6 py-4'>
              <div className='font-extrabold text-black text-lg mb-2'>Mountain</div>
              <p className='text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eveniet distinctio aspernatur! Quisquam dolores, tempora ipsam nobis eaque voluptate quidem ullam quibusdam blanditiis ab tenetur nisi culpa iste vitae inventore!</p>
            </div>

            <div className='grid grid-flow-col gap-5 pb-2 px-6'>
              <span className='bg-white text-gray-700 text-sm rounded-full px-4 py-2 mb-2 '>#Photography</span>
              <span className='bg-white text-gray-700 text-sm rounded-full px-4 py-2 mb-2 '>#Travel</span>
              <span className='bg-white text-gray-700 text-sm rounded-full px-4 py-2 mb-2 '>#Winter</span>

            </div>
          </div>

        </div>
        <div className='py-10'>
          <div className='rounded-lg shadow-lg max-w-md '>
            <img src="https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2022/07/09204059/IMG_1976-1.jpg" alt="mountain" className='w-full rounded-lg' />
            <div className='px-6 py-4 '>
              <div className='font-bold text-lg mb-2'>Mountain</div>
              <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eveniet distinctio aspernatur! Quisquam dolores, tempora ipsam nobis eaque voluptate quidem ullam quibusdam blanditiis ab tenetur nisi culpa iste vitae inventore!</p>
            </div>

            <div className='grid grid-flow-col gap-5 pb-2 px-6'>
              <span className='bg-white text-gray-700 text-sm rounded-full px-4 py-2 mb-2 '>#Photography</span>
              <span className='bg-white text-gray-700 text-sm rounded-full px-4 py-2 mb-2 '>#Travel</span>
              <span className='bg-white text-gray-700 text-sm rounded-full px-4 py-2 mb-2 '>#Winter</span>

            </div>
          </div>

        </div>
        <div className='py-10'>
          <div className=' shadow-lg max-w-md rounded-lg'>
            <img src="https://cdn.britannica.com/73/189273-131-DA3E2F9A/Denali-peak-center-Alaska-Range-North-America.jpg" alt="mountain" className='w-full rounded-lg' />
            <div className='px-6 py-4'>
              <div className='font-bold text-lg mb-2'>Mountain</div>
              <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eveniet distinctio aspernatur! Quisquam dolores, tempora ipsam nobis eaque voluptate quidem ullam quibusdam blanditiis ab tenetur nisi culpa iste vitae inventore!</p>
            </div>

            <div className='grid grid-flow-col gap-5 pb-2 px-6'>
              <span className='bg-white text-gray-700 text-sm rounded-full px-4 py-2 mb-2 '>#Photography</span>
              <span className='bg-white text-gray-700 text-sm rounded-full px-4 py-2 mb-2 '>#Travel</span>
              <span className='bg-white text-gray-700 text-sm rounded-full px-4 py-2 mb-2 '>#Winter</span>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home