"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const DesignType = ({ selectedDesignType }) => {

    const [selectedInterior, setSelectedInterior] = useState()

    const designs = [
        {
            name: "modern",
            image: "/modern.jpg"
        },
        {
            name: "traditional",
            image: "/traditional.jpg"
        },
        {
            name: "rustic",
            image: "/rustic.jpg"
        },
        {
            name: "bohemian",
            image: "/bohemian.jpg"
        },
        {
            name: "industrial",
            image: "/industrial.jpeg"
        },
        {
            name: "minimalist",
            image: "/minimalist.jpg"
        },
    ]

  return (
    <div>
        <label>Select interior type </label>
        
           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2'> 
           {designs.map((design, index)=> {
               return (
                <div key={index} onClick={()=>{setSelectedInterior(design.name); selectedDesignType(design.name)}}
                 className={`cursor-pointer hover:scale-105 transition-all `}>
                    <Image src={design.image} alt={design.name} height={80} width={80} className={`h-[60] rounded object-fit ${selectedInterior == design.name ? 'border-2 border-[#9D722F]': ''}`}/>
                    <h2>{design.name}</h2>
                </div>
                
               )
            })}
           </div>
       


    </div>
  )
}

export default DesignType