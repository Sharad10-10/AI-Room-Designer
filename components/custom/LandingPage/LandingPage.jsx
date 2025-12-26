// app/page.jsx
"use client";

import HeroSection from "./HeroSection/HeroSection";
import HowItWorks from "./HowItWorks/HowItWorks";
import DesignStyles from "./DesignStyles/DesignStyles";
import Footer from "./Footer/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works */}
      <HowItWorks />

      {/* Design Styles  */}
      <DesignStyles />

      {/* Pricing */}

      <div className="flex flex-col items-center justify-center text-center p-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-gray-600">Pay only for what you use</p>
      </div>

      {/* Footer */}

      <Footer />
    </div>
  );
}
