"use client"
import { Button } from '../../ui/button'
import { UserDetailsContext } from '../../../app/_context/UserDetailsContext'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'

const Header = () => {
    const {userDetail, setUserDetail} = useContext(UserDetailsContext)
    console.log(userDetail?.credits)
  return (
    <div className='shadow-md flex items-center justify-between px-1 sm:px-8'>
        <div className='flex items-center gap-2'>
            <Image src='/Logo.png' alt='Logo' height={80} width={80} />
            <h2 className='font-semibold text-lg'>AI Interior Designer</h2>
        </div>

        <div className='flex gap-8 items-center'>
            <div>
            <Button className='rounded-lg text-[#9D722F] cursor-pointer' variant='ghost'>Buy More Credits</Button>
            </div>
            <div className='flex gap-2'>
                <div className='bg-gray-300 flex gap-1 px-4 rounded-lg'>
                    <span>⭐</span> 
                    <span>{userDetail?.credits}</span>
                </div>
                <span>Credits</span>
            </div>
            <UserButton />
        </div>
    </div>
  )
}

export default Header