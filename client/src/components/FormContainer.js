import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import EmbedForm from './EmbedForm';
import SocialForm from './SocialForm';

import Auth from '../utils/auth';

import { SAVE_BITESITE } from '../utils/mutations';

const FormContainer = () => {
  
  // // create function to handle saving a social to our database
  // const handleSaveSoMe = async () => {
  //   // find the social in `searchedSoMes` state by the matching id
   
  //   // get token
  //   // const token = Auth.loggedIn() ? Auth.getToken() : null;
  //   // if (!token) {
  //   //   return false;
  //   // }

  // set booleans
  // state to track properties ---
  // 
  // define the function 
  // lifting the state "UP"
  // pass the function into embed form through a 
  
  const [selections, setSelections] = useState(
    {
    embedChoice: '',
    socialArray: [],
    socialURLArray: [],
    imgURLArray: [],
    });

  const [whichForm, setWhichForm] = useState(0)
  
// when form is filled, return values
  function buildMyEmbedChoice(values) {
    setSelections(values.embedChoice)
    setWhichForm(whichForm+=1);
    // embedChoice
  }
  

  function buildMySocialChoice(values) {
    setSelections(values.socialArray)
    setWhichForm(whichForm+=1);
    // socialArray
  }
  

  function renderSwitch(whichForm) {
    switch (whichForm) {
      case 0:
        return <EmbedForm buildMyEmbedChoice={buildMyEmbedChoice}></EmbedForm>
      default:
        return <SocialForm buildMySocialChoice={buildMySocialChoice}></SocialForm>
      // case 2:
      //   return <SocialForm buildMySocialChoice={buildMySocialChoice}></SocialForm>  

      // default: 
      //   return <SocialForm buildMySocialChoice={buildMySocialChoice}></SocialForm>
    }
  }


  return (
    <>
    <div className="flex container " id="myContainer" >
        <div role="group" className="place-content-center" id="myFormGroup"   >
            <h2 className="py text-xl TitleForUserClass text-center" id="SoMeEmbedSelect">Which social would you like to embed?</h2>
            <p className="py-5 myInstructionsToUserClass text-center" id="SoMeEmbedSelectInstruct">Select one social profile to embed. (required)</p>
            {/* would render in order of EmbedForm, SocialForm, SocialURLsForm, ImagesURLForm */}
            {renderSwitch(whichForm)}
        </div>
    {/* <!-- perhaps consider putting an icon on the button conveying that the user should advance --> */}
    </div>
    <div className="flex mt-16 container place-content-center" id="myBottomContainer" >
    </div>
    </>
  );
};

export default FormContainer;
