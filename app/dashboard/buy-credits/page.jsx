
import BuyCreditsCard from '../../../components/custom/BuyCreditsCard/BuyCreditsCard'
import React from 'react'

const BuyCredits = () => {

  return (
    <div className='flex flex-col gap-8 items-center justify-center mt-10'>
        <div className='text-center'>
            <h1 className='text-2xl text-[#9D722F] font-semibold'>Buy More Credits</h1>
            <h2 className='text-sm text-gray-400'>Buy credits to transform your room into magically redesigned AI space</h2>
        </div>

        <BuyCreditsCard />
    </div>
  )
}

export default BuyCredits