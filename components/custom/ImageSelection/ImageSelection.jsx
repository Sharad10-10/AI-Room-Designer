import Image from 'next/image'
import React from 'react'

const ImageSelection = () => {
  return (
    <div>
        <label htmlFor="image-selection">Select Image of your choice</label><br />
        <label htmlFor="upload-image">
            <div className='border border-dotted border-primary rounded-lg px-40 py-24  bg-slate-200 mt-2'>
                <Image src='/uploadImage.jpg' alt='upload-image' height={80} width={80} />
            </div>
        </label>
        <input type="file" accept='image/*' id='upload-image' style={{display:"none"}}/>
    </div>
  )
}

export default ImageSelection