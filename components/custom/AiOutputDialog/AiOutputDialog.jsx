import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../ui/alert-dialog";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Button } from "../../ui/button";

const AiOutputDialog = ({ openDialog, closeDialog, aiGeneratedImage, originalImage }) => {
  return (
    <div>
      <AlertDialog open = {openDialog} >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className={'text-center'}>Redesigned room</AlertDialogTitle>
          </AlertDialogHeader>
 
          <ReactBeforeSliderComponent
            firstImage={{imageUrl: aiGeneratedImage}}
            secondImage={{imageUrl: originalImage}}
          />
          <Button className={'cursor-pointer'} onClick={()=>closeDialog(false)}>Close</Button>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AiOutputDialog;
