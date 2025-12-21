"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ImageSelection = ({ selectedImage }) => {

    const [selectedFile, setSelectedFile] = useState()

    const handleFileSelection = (e)=> {
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
        selectedImage(e.target.files[0])
        
    }


  return (
    <div>
        <label htmlFor="image-selection">Select Image of your choice</label><br />
        <label htmlFor="upload-image">
            <div className={`border border-dotted border-primary rounded-lg overflow-hidden bg-slate-200 cursor-pointer mt-2 hover:shadow-lg ${selectedFile ? 'p-0': 'px-40 py-25'}`}>
                {selectedFile ? <Image src={URL.createObjectURL(selectedFile)} className='object-fit' alt='user-image' height={480} width={480}/> : <Image src='/uploadImage.jpg' alt='upload-image' height={80} width={80} />}
            </div>
        </label>
        <input onChange={handleFileSelection} type="file" accept='image/*' id='upload-image' style={{display:"none"}}/>
    </div>
  )
}

export default ImageSelection