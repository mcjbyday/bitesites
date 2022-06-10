import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import MyFormikSandbox from './MyFormikSandbox';

import Auth from '../utils/auth';

import { SAVE_BITESITE } from '../utils/mutations';


const EmbedGroup = () => {
  // create state for holding returned google api data
  const [selectedSoMes, setSelectedSoMes] = useState([]);
  
  // // create function to handle saving a social to our database
  // const handleSaveSoMe = async () => {
  //   // find the social in `searchedSoMes` state by the matching id
   
  //   // get token
  //   // const token = Auth.loggedIn() ? Auth.getToken() : null;
  //   // if (!token) {
  //   //   return false;
  //   // }

  return (
    <>
    <div className="flex container " id="myContainer" >
        <div role="group" className="place-content-center" id="myFormGroup"   >
            <h2 className="py text-xl TitleForUserClass text-center" id="SoMeEmbedSelect">Which social would you like to embed?</h2>
            <p className="py-5 myInstructionsToUserClass text-center" id="SoMeEmbedSelectInstruct">Select one social profile to embed. (required)</p>
            <MyFormikSandbox></MyFormikSandbox>
        </div>
    {/* <!-- perhaps consider putting an icon on the button conveying that the user should advance --> */}
    </div>
    <div className="flex mt-16 container place-content-center" id="myBottomContainer" >
    <button aria-label="Proceed to step 2" disabled=""
        className="myButtonAdvanceClass">
        <span className="myPutAnArrowHere">↓</span></button>
    </div>
    </>
  );
};

export default EmbedGroup;
