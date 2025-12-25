import React from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle
 
} from "../../ui/alert-dialog";


const CustomLoading = ({ loading }) => {
  return (
    <div>
      <AlertDialog open = {loading}>
 
        <AlertDialogContent>
        <AlertDialogTitle className={'text-center'}>Redesigning</AlertDialogTitle>
            <div className="flex space-x-2 justify-center items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            <div className="text-center">
                {/* <h1>Redesigning...</h1> */}
                <h2 className="text-gray-500 text-center">Please wait while we are generating your room</h2>
            </div>

        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CustomLoading;
