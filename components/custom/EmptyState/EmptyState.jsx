import Image from 'next/image'
import React from 'react'


const EmptyState = () => {
  return (
    <div>
        <div>
          <Image src='/home-image.png' alt='Home Image' height={680} width={680} className='rounded-lg'/>
            <h2 className='text-center text-[#696C6C] pt-2'>Let AI reshape and redesign your room</h2>
        </div>

    </div>
  )
}

export default EmptyState