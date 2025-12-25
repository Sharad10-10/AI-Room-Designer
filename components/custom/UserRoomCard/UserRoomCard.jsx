import React, { useState } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import AiOutputDialog from "../AiOutputDialog/AiOutputDialog";

const UserRoomCard = ({ roomListing}) => {


  return (
   
          <div className="cursor-pointer" >
           <div className="border-2 border-[#9D722F] rounded-lg overflow-hidden hover:scale-105 transition-all homeSlider">
                <ReactBeforeSliderComponent
                firstImage={{ imageUrl: roomListing?.aiImage }}
                secondImage={{ imageUrl: roomListing?.originalImage }}
                />
            </div>

            <div className="pt-2">
                <h2>🏠 {roomListing?.roomType}</h2>
                <p className="capitalize text-gray-600 text-sm">🚪 {roomListing?.designType}</p>
            </div>

          </div>

          
        );
};

export default UserRoomCard;
