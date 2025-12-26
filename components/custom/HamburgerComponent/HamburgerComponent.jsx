"use client"
import { UserDetailsContext } from '../../../app/_context/UserDetailsContext'
import { Button } from '../../ui/button'
import { UserButton, useUser } from '@clerk/nextjs';
import { Home, LayoutDashboard, Menu, ShoppingCart, Star, X } from 'lucide-react';
import React, { useContext, useState } from 'react'
import Link from 'next/link';

const HamburgerComponent = () => {
    const { user, isLoaded, isSignedIn } = useUser();
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const closeMenu = () => setMobileMenuOpen(false);
        const { userDetail, setUserDetail } = useContext(UserDetailsContext);
  return (
    <div>
           {/* Mobile: ONLY Hamburger */}
           <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 cursor-pointer" /> : <Menu className="w-6 h-6 cursor-pointer" />}
          </button>


           {/* Slide-in Mobile Menu */}
       <div
        className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b bg-[#9D722F]">
          <h3 className="font-bold text-lg text-white">Menu</h3>
          <button
            onClick={closeMenu}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white cursor-pointer" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-b bg-gray-50">
          <div className="flex items-center gap-3 mb-4">
            <UserButton />
            <div className="flex-1">
              <p className="font-semibold text-sm">{user?.fullName}</p>
              <p className="text-xs text-gray-500 truncate">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>

          {/* Credits Display */}
          <div className="bg-gradient-to-r from-[#9D722F] to-[#8A6229] p-4 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-medium">Your Credits</span>
              </div>
              <div className="text-2xl font-bold">
                {userDetail?.credits || 0}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-4 gap-2">
          <Link href="/" onClick={closeMenu}>
            <Button
              variant="ghost"
              className="w-full justify-start text-[#9D722F] hover:bg-[#9D722F]/10 py-6 text-base cursor-pointer"
            >
              <Home className="w-5 h-5 mr-3"/> 
              Home
            </Button>
          </Link>

          <Link href="/dashboard" onClick={closeMenu}>
            <Button
              variant="ghost"
              className="w-full justify-start text-[#9D722F] hover:bg-[#9D722F]/10 py-6 text-base cursor-pointer"
            >
              <LayoutDashboard className="w-5 h-5 mr-3" />
              Dashboard
            </Button>
          </Link>

          <Link href="/dashboard/buy-credits" onClick={closeMenu}>
            <Button
              variant="ghost"
              className="w-full justify-start text-[#9D722F] hover:bg-[#9D722F]/10 py-6 text-base cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 mr-3" />
              Buy More Credits
            </Button>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default HamburgerComponent