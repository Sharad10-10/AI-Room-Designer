import { Button } from "../../../ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const HeroSection = () => {
  return (
    <div className="mt-2">
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#9D722F]/10 px-4 py-2 rounded-full mb-8">
            <span className="text-sm font-medium text-[#9D722F]">
              AI-Powered Interior Design
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Space with
            <span className="text-[#9D722F]"> AI Magic</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Upload a photo of your room and let our AI redesign it instantly.
            Choose from multiple design styles and see your dream space come to
            life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button className="bg-[#9D722F] cursor-pointer text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                Get Started For Free
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            ✨ Get 3 free credits on signup · No credit card required
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
