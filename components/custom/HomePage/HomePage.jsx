"use client"
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import {Button} from '../../ui/button'
import Image from 'next/image'
import EmptyState from '../EmptyState/EmptyState'
import Link from 'next/link'

const HomePage = () => {
  const {user} = useUser();
  const [roomListing, setRoomListing] = useState([]);
  return (
    <div className='mt-10 flex flex-col items-center gap-8'>
        <h1 className='text-2xl font-semibold'>Welcome {user?.fullName}</h1>
        <div className='flex justify-center'>
          <Link href={'./dashboard/create-new'}><Button className='cursor-pointer'>Click Here To Redesign Your Room</Button></Link>     
        </div>
    
      {roomListing?.length == 0 ? 
      <EmptyState />
      : 
      <div>
        {/* {user room listing} */}
      </div>
      }

    </div>
  )
}

export default HomePage