import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12 mt-12'>
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid md:grid-cols-4 gap-8'>
        <div className='col-span-2'>
          <div className='flex items-center gap-2 mb-4'>
            <Image src='/Logo.png' alt='Logo' width={40} height={40} />
            <span className='font-bold text-xl'>AI Interior Designer</span>
          </div>
          <p className='text-gray-400 mb-4'>
            Transform your living spaces with the power of AI. Professional interior design made accessible to everyone.
          </p>
        </div>
        
        <div>
          <ul className='space-y-2 text-gray-400'>
            <li><Link href='#how-it-works' className='hover:text-white'>How It Works</Link></li>
            <li><Link href='#pricing' className='hover:text-white'>Pricing</Link></li>
            <li><Link href='/dashboard' className='hover:text-white'>Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <ul className='space-y-2 text-gray-400'>
            <li><Link href='/about' className='hover:text-white'>About</Link></li>
            <li><Link href='/contact' className='hover:text-white'>Contact</Link></li>
            <li><Link href='/privacy' className='hover:text-white'>Privacy</Link></li>
            <li><Link href='/terms' className='hover:text-white'>Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
        <p>&copy; 2026 AI Interior Designer. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer