import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import EmbedForm from './EmbedForm';
import SocialForm from './SocialForm';

import Auth from '../utils/auth';

import { SAVE_BITESITE } from '../utils/mutations';
import MyTextFieldForm from './MyTextFieldForm';

const FormContainer = () => {
  
  //   // get token
  //   // const token = Auth.loggedIn() ? Auth.getToken() : null;
  //   // if (!token) {
  //   //   return false;
  //   // }

  // define the function 
  // lifting the state "UP"
  // pass the function into embed form through a 
  

  const [embedChoiceFromUser, setEmbedChoiceFromUser] = useState('');
  const [socialArrayFromUser, setSocialArrayFromUser] = useState(["Alpha","Beta","Gamma"]);  
  const [socialURLArrayFromUser, setSocialURLArrayFromUser] = useState([]);
  // const [imgURLArrayFromUser, setImgURLArrayFromUser] = useState([]);  
  
  const [formCounter1, setFormCounter1] = useState(0);

  const [whichForm, setWhichForm] = useState(2)
// when form is filled, return values
  function buildMyEmbedChoice(values) { 
    setEmbedChoiceFromUser(values.embedChoice)
    setWhichForm(1);
    // embedChoice
  }
  
  function buildMySocialChoice(values) {
    setSocialArrayFromUser(values.socialArray)
    setWhichForm(2);
  }
  
  function buildMyIndividualURLs(values) {
    setSocialURLArrayFromUser(values)
    setWhichForm(2);
    if (formCounter1 < socialArrayFromUser.length ) {
      setFormCounter1(formCounter1+1)
    }
  }
  
  useEffect(()=>{console.log(myFinalForm)} )

  let myFinalForm = {
    embed: embedChoiceFromUser,
    social: socialArrayFromUser,
    socialURL: socialURLArrayFromUser,
    // img: imgURLArrayFromUser,
  }

  function renderSwitch(whichForm) {
    switch (whichForm) {
      case 0:
        return <EmbedForm buildMyEmbedChoice={buildMyEmbedChoice}></EmbedForm>
      case 1:
        return <SocialForm buildMySocialChoice={buildMySocialChoice}></SocialForm>
      case 2:
        return <MyTextFieldForm formCounter1={formCounter1} buildMyIndividualURLs={buildMyIndividualURLs} socialArrayFromUser={socialArrayFromUser}></MyTextFieldForm>
      default: 
        return <MyTextFieldForm buildMyIndividualURLs={buildMyIndividualURLs} socialArrayFromUser={socialArrayFromUser}></MyTextFieldForm>
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
            {/* <h2 className="py text-xl TitleForUserClass text-center" id="SoMeEmbedSelect">Which social would you like to embed?</h2>
            <p className="py-5 myInstructionsToUserClass text-center" id="SoMeEmbedSelectInstruct">Select one social profile to embed. (required)</p> */}
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
