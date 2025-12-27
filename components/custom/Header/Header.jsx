"use client";
import { Button } from "../../ui/button";
import { UserDetailsContext } from "../../../app/_context/UserDetailsContext";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import HamburgerComponent from "../HamburgerComponent/HamburgerComponent";



const Header = () => {
  const { isSignedIn } = useUser();
  const { userDetail, setUserDetail } = useContext(UserDetailsContext);
  console.log(userDetail?.credits);

  if (!isSignedIn) {
    return (
      <div className="shadow-md flex items-center justify-between px-1 sm:px-8">
        <div className="flex items-center gap-2">
          <Image src="/Logo.png" alt="Logo" height={80} width={80} />
          <h2 className="font-semibold text-lg sm:text-xl">
            AI Interior Designer
          </h2>
        </div>

        <div className="flex gap-3 items-center">
          <Link href="/sign-in">
            <Button className="bg-[#9D722F] cursor-pointer">Get Started</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="shadow-md flex items-center justify-between px-1 sm:px-8">
      <div className="flex items-center gap-2 ">
        <Image src="/Logo.png" alt="Logo" height={80} width={80} />
        <h2 className="font-semibold text-lg">AI Interior Designer</h2>
      </div>

      <div className="hidden md:flex gap-4 items-center ml-auto">
        <div>
          <Link href={"/"}>
            <Button
              className="rounded-lg text-[#9D722F] cursor-pointer"
              variant="ghost"
            >
              Home
            </Button>
          </Link>
        </div>
        <div>
          <Link href={"/dashboard"}>
            <Button
              className="rounded-lg text-[#9D722F] cursor-pointer"
              variant="ghost"
            >
              Dashboard
            </Button>
          </Link>
        </div>
        <div>
          <Link href={"/dashboard/buy-credits"}>
            <Button
              className="rounded-lg text-[#9D722F] cursor-pointer"
              variant="ghost"
            >
              Buy More Credits
            </Button>
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="bg-gray-300 flex gap-1 px-4 rounded-lg">
            <span>⭐</span>
            <span>{userDetail?.credits}</span>
          </div>
          <span>Credits</span>
        </div>
        <UserButton  appearance={{
    elements: {
      footer: "hidden",userButtonPopoverFooter: "hidden"
    },
  }}/>
      </div>

      <HamburgerComponent />


       
    </div>


      




          
     
    
       

    </>

    
  );
};

export default Header;
