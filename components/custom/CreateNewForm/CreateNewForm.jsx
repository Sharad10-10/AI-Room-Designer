"use client"
import React, { useState } from 'react'
import ImageSelection from '../ImageSelection/ImageSelection'
import SelectRoomType from '../SelectRoomType/SelectRoomType'
import DesignType from '../DesignType/DesignType'
import AdditionalRequirement from '../AdditionalRequirement/AdditionalRequirement'
import { Button } from '../../ui/button'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../../config/firebaseConfig'
import { useUser } from '@clerk/nextjs'


const CreateNewForm = () => {

    const [formData, setFormData] = useState()

    const {user}= useUser();

    const handleInputChange = (value, fieldName)=> {
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }))        
      }
      console.log(formData)


      const generateAiImage = async()=> {

        const rawImageUrl = await saveRawImageToFirebase()

        const result = await fetch('/api/redesign-room', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                imageUrl : rawImageUrl,
                roomType : formData?.roomType,
                designType: formData?.designType,
                additionalRequirements : formData?.additionalRequirements,
                email: user?.primaryEmailAddress?.emailAddress

            })
        })

        // const data = await result.json()
        // console.log(data)
      }

      const saveRawImageToFirebase = async()=> {
        // lets create filename first and give reference of storage of firebase
        const fileName = Date.now()+'_raw.png'
        const imageRef = ref(storage, 'ai-room-design/' + fileName) 
        // image reference created and also storage(folder) reference given

        // now lets upload the file to firebase storage using imageRef and users uploaded image
        await uploadBytes(imageRef, formData.image)
        .then(res=>{console.log("File uploaded successfully...")})

        const downloadUrl = await getDownloadURL(imageRef)
        // this gets the url that was uploaded to firebase storage
        console.log(downloadUrl)
        return downloadUrl
      }


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
                    
                        <Button onClick = {generateAiImage} className='bg-[#9D722F] cursor-pointer'>Redesign</Button>
                        <p className='text-sm text-gray-400'>Note: 1 Credit will be used to redesign your room</p>
                    </div>
                </div>
          
       


    </div>
  )
}

export default CreateNewForm