"use client"
import React, { useState } from 'react'
import ImageSelection from '../ImageSelection/ImageSelection'
import SelectRoomType from '../SelectRoomType/SelectRoomType'
import DesignType from '../DesignType/DesignType'
import AdditionalRequirement from '../AdditionalRequirement/AdditionalRequirement'
import { Button } from '../../ui/button'

const CreateNewForm = () => {

    const [formData, setFormData] = useState()

    const handleInputChange = (value, fieldName)=> {
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }))

        
      }

      console.log(formData)

  return (
    <div>
         <div className='grid grid-cols-1 md:grid-cols-2 mt-10 max-w-6xl mx-auto place-items-center'>
         
                <div className='flex'>
                    <ImageSelection selectedImage={(value)=>handleInputChange(value, "image")}/>
                </div>

                
                    {/* form input */}

                    <div className='flex flex-col gap-4'>
                        {/* select room type */}
                        <SelectRoomType selectedRoomType={(value)=>handleInputChange(value, "roomType")} />
                    

                    
                        {/* Select interior type */}
                        <DesignType selectedDesignType={(value)=>handleInputChange(value, "designType")}/>
                  

                   
                        {/* additional requirements -- textarea*/}
                        <AdditionalRequirement additionalInput={(value)=> handleInputChange(value, "additionalRequirements")}/>
                    
                        <Button className='bg-[#9D722F] cursor-pointer'>Redesign</Button>
                        <p className='text-sm text-gray-400'>Note: 1 Credit will be used to redesign your room</p>
                    </div>
                </div>
          
       


    </div>
  )
}

export default CreateNewForm