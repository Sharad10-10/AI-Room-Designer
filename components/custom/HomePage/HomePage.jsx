"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import {Button} from '../../ui/button'
import Image from 'next/image'
import EmptyState from '../EmptyState/EmptyState'
import Link from 'next/link'
import db from '../../../config/dbConfig'
import { AiGeneratedImage } from '../../../config/schema'
import { eq } from 'drizzle-orm'
import UserRoomCard from '../UserRoomCard/UserRoomCard'

const HomePage = () => {
  const {user} = useUser();
  const [roomListing, setRoomListing] = useState([]);

  useEffect(()=> {
    const getRoomList = async()=> {
      const result = await db.select().from(AiGeneratedImage).where(eq(AiGeneratedImage?.email, user?.primaryEmailAddress?.emailAddress))
      console.log(result)
      setRoomListing(result)
  
    }
    getRoomList()
  }, [user])

  return (
    <div className='my-10 flex flex-col items-center gap-8'>
        <h1 className='text-2xl font-semibold'>Welcome {user?.fullName}</h1>
        <div className='flex justify-center'>
          <Link href={'./dashboard/create-new'}><Button className='bg-[#9D722F] cursor-pointer'>Click Here To Redesign Your Room</Button></Link>     
        </div>
    
      {roomListing?.length == 0 ? 
      <EmptyState />
      : 
      // user room listing
    <div className='shadow-2xl rounded-lg py-4'>
      <h1 className='text-center text-xl text-[#9F7533]'>Your AI ROOM STUDIO</h1>
      <div className="flex items-center justify-center gap-10 flex-wrap max-w-350 w-full py-4">
      {roomListing.map((roomListing, index) => {
        return (
        <UserRoomCard roomListing={roomListing} key={index} />
        )})}
        </div>
        {/* <UserRoomCard roomListing={roomListing} /> */}
    </div>
       
      
      }

    </div>
  )
}

export default HomePage