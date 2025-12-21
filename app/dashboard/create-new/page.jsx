import CreateNewForm from '../../../components/custom/CreateNewForm/CreateNewForm'
import React from 'react'

const CreateNew = () => {

  return (
    <div >
        <div className='flex flex-col items-center mt-10 text-center'>
            <h1 className='text-xl font-semibold'>Experience the future of interior design with AI-powered creativity.</h1>
            <h2 className='text-lg text-gray-500'>Upload your space, choose a style, and let AI do the magic.</h2>
        </div>

      <CreateNewForm />


    </div>
  )
}

export default CreateNew