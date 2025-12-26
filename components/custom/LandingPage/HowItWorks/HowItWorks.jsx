import React from 'react'

const HowItWorks = () => {
  return (
    <div>
        <section id='how-it-works' className='py-20 bg-gray-50'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              How It Works
            </h2>
            <p className='text-lg text-gray-600'>
              Transform your room in 3 simple steps
            </p>
          </div>

          <div className='flex items-center justify-center'>
            <div className='grid md:grid-cols-3 gap-8'>
             
                <div className='flex flex-col items-center justify-center gap-4 text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'>
                    <div className='bg-[#9D722F] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold'>
                        1
                    </div>
                    <h3 className='text-xl font-semibold'>Upload Photo</h3>
                    <p className='text-gray-600'>
                        Take a photo of your room and upload it to our platform
                    </p>
                </div>
             
             
                <div className='flex flex-col items-center justify-center gap-4 text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'>
                  <div className='bg-[#9D722F] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold'>
                    2
                  </div>
                  <h3 className='text-xl font-semibold'>Choose Style</h3>
                  <p className='text-gray-600'>
                    Select your preferred room type and design style
                  </p>
                </div>
              
              <div className='flex flex-col items-center justify-center gap-4 text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'>
                <div className='bg-[#9D722F] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold'>
                  3
                </div>
                <h3 className='text-xl font-semibold'>Get Results</h3>
                <p className='text-gray-600'>
                  AI generates your redesigned room instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks