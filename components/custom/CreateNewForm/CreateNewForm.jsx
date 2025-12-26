"use client"
import React, { useContext, useState } from 'react'
import ImageSelection from '../ImageSelection/ImageSelection'
import SelectRoomType from '../SelectRoomType/SelectRoomType'
import DesignType from '../DesignType/DesignType'
import AdditionalRequirement from '../AdditionalRequirement/AdditionalRequirement'
import { Button } from '../../ui/button'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../../config/firebaseConfig'
import { useUser } from '@clerk/nextjs'
import CustomLoading from '../../../components/custom/CustomLoading/CustomLoading'
import AiOutputDialog from '../AiOutputDialog/AiOutputDialog'
import db from '../../../config/dbConfig'
import Users from '../../../config/schema'
import { UserDetailsContext } from '../../../app/_context/UserDetailsContext'
import { eq } from 'drizzle-orm'

const CreateNewForm = () => {

    const [formData, setFormData] = useState();
    const [loading, setLoading] = useState(false);
    const [outputData, setOutputData] = useState();
    const [openOutputDialog, setOpenOutputDialog] = useState(false);
    const [originalImage, setOriginalImage] = useState();
    const [aiGeneratedImage, setAiGeneratedImage] = useState();
    const {user}= useUser();
   const {userDetail, setUserDetail} = useContext(UserDetailsContext);

    const handleInputChange = (value, fieldName)=> {
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }))        
      }
      console.log(formData)


      const generateAiImage = async()=> {
        setLoading(true)
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

        const data = await result.json()
        console.log(data?.result)
        setOutputData(data?.result)
        setAiGeneratedImage(data?.result?.aiImage)
        setOpenOutputDialog(true)
        updateUserCredits();
        setLoading(false)
        
      }

      console.log(outputData)

    //   save image to firebase storage
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
        setOriginalImage(downloadUrl)
        return downloadUrl
      }

    //   update user credits after generating user image with ai

      const updateUserCredits = async()=> {
        const result = await db.update(Users).set({
            credits: userDetail?.credits - 1
        }).where(eq(Users?.email, user?.primaryEmailAddress?.emailAddress)).returning()
        if (result) {
            setUserDetail(prev =>({...prev, credits: result[0].credits}))
        }
      }


  return (
    <div>
         <div className='grid grid-cols-1 md:grid-cols-2 mt-10 max-w-6xl mx-auto place-items-center gap-3'>
         
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

                    <CustomLoading loading = {loading}/>
                    <AiOutputDialog openDialog={openOutputDialog} closeDialog={()=>(setOpenOutputDialog(false))} originalImage={originalImage} aiGeneratedImage={aiGeneratedImage}/>
                    
                </div>
          
       


    </div>
  )
}

export default CreateNewForm