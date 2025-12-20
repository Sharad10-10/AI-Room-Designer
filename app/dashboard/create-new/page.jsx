import ImageSelection from '../../../components/custom/ImageSelection/ImageSelection'
import React from 'react'

const CreateNew = () => {
  return (
    <div>
        <div className='flex flex-col items-center mt-10'>
            <h1 className='text-xl font-semibold'>Experience the future of interior design with AI-powered creativity.</h1>
            <h2 className='text-lg text-gray-500'>Upload your space, choose a style, and let AI do the magic.</h2>
        </div>

       <div className='grid grid-cols-1 md:grid-cols-2 place-items-center mt-10'>
            <div>
                <ImageSelection />
            </div>

            <div>
                {/* form input */}
            </div>
       </div>


    </div>
  )
}

export default CreateNew