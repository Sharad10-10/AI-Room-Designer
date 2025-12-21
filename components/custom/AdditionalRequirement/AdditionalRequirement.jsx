import { Textarea } from '../../ui/textarea'
import React from 'react'

const AdditionalRequirement = ({additionalInput}) => {
  return (
    <div>
        <label htmlFor="textArea" className='text-gray-600'>Enter additional requirement(Optional)</label>
        <Textarea placeholder = {'...'} onChange = {(e)=>additionalInput(e.target.value)} className='mt-2'/>

    </div>
  )
}

export default AdditionalRequirement