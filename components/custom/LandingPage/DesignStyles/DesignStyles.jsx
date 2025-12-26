import React from 'react'

const DesignStyles = () => {
    const designs = ['Modern', 'Traditional', 'Industrial', 'Bohemian', 'Minimalist', 'Rustic']
  return (
    <div>
         <section className='py-20 bg-white'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              Available Design Styles
            </h2>
            <p className='text-lg text-gray-600'>
              Choose from a variety of professional design styles
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {designs.map((style) => (
              <div key={style} className='bg-gray-50 rounded-lg p-6 text-center hover:bg-[#9D722F]/10 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-[#9D722F]'>
                <h3 className='text-lg font-semibold text-gray-900'>{style}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DesignStyles