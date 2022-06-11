import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';


// each of these components uses Formik and component objects to render the appropriate field / option to the user based on the properties of the website builder output
import EmbedForm from './EmbedForm';
import SocialForm from './SocialForm'
import SandEmbedForm from './SandEmbedForm';
import SandSocialForm from './SandSocialForm'

import Auth from '../utils/auth';

import { SAVE_BITESITE } from '../utils/mutations';
import MyTextFieldForm from './MyTextFieldForm';

const FormContainer = () => {
  // this FormContainer contains the logic for each portion of a user's website content submission

  // this snippet of code ensures a user has been authenticated // currently commented out

  // get token
  // const token = Auth.loggedIn() ? Auth.getToken() : null;
  // if (!token) {
  //   return false;
  // }

  // each of these states stores information collected from the user involving each portion of the page namely: the social site they'd like to embed, the social sites they'd like to link, the individul URLs of their selected social sites, the URL of their avatar image,

  // TODO their nameplate / subnameplate (a derivative of the URL form entry )

  const [embedChoiceFromUser, setEmbedChoiceFromUser] = useState('');
  const [socialArrayFromUser, setSocialArrayFromUser] = useState([]);
  const [socialURLArrayFromUser, setSocialURLArrayFromUser] = useState([]);
  const [imageURLArrayFromUser, setImageURLArrayFromUser] = useState(['your desired avatar image']);

  // this counter tracks the number of social entries they provided in part 2 of the submission flow
  const [formCounter1, setFormCounter1] = useState(0);

  // this logic governs which component to serve to the user depending on their current place in the form flow
  const [whichForm, setWhichForm] = useState(0)

  // this gathers user input from embed radio options form component and is passed using props
  function buildMyEmbedChoice(values) {
    setEmbedChoiceFromUser(values.embedSelection)
    setWhichForm(whichForm + 1);
  }

  // this gathers user input from social check options component and is passed using props
  function buildMySocialChoice(values) {
    setSocialArrayFromUser(values.socialsArray)
    setWhichForm(whichForm + 1);
  }

  // this gathers user input pertaining to social media profile URL "copy-pastes" and is passed using props
  // it builds the array depending on the number and type of social medias the user selected in their checklist
  function buildMyIndividualURLs(values) {
    setSocialURLArrayFromUser(values)
    if (formCounter1 < socialArrayFromUser.length) {
      setFormCounter1(formCounter1 + 1)
    }
    else {
      setWhichForm(whichForm + 1);
    }
  }

  // this gathers user input pertaining to their desired profile avatar URL
  // it builds the array depending on the number and type of social medias the user selected in their checklist
  function buildMyImageURLArray(values) {
    setImageURLArrayFromUser(values)
    setWhichForm(9);
  }

  // this is for debug purposes to display the form submission content at any point in the form entry flow
  useEffect(() => { console.log("MyFinalForm is... \n", myFinalForm) })

  // this is the data blob that can passed to the download utility
  let myFinalForm = {
    embed: embedChoiceFromUser,
    social: socialArrayFromUser,
    socialURL: socialURLArrayFromUser,
    images: imageURLArrayFromUser,
  }

  // social media address placeholder data
  // https://open.spotify.com/user/122330043
  // https://www.instagram.com/paulmccartney/
  // https://www.facebook.com/myspacetom

  // image placeholder data
  // https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73047.jpg?size=338&ext=jpg

  // this renderSwitch statement governs which form component is displayed at any particular time. users must refresh the page if they want to clear or reset where they are in the form submission process

  function renderSwitch(whichForm) {
    switch (whichForm) {
      case 0:
        return <SandEmbedForm buildMyEmbedChoice={buildMyEmbedChoice}></SandEmbedForm>
      case 1:
        return <SandSocialForm buildMySocialChoice={buildMySocialChoice}></SandSocialForm>
      case 2:
        return <MyTextFieldForm formCounter1={formCounter1} buildMyIndividualURLs={buildMyIndividualURLs} socialArrayFromUser={socialArrayFromUser}></MyTextFieldForm>
      case 3:
        return <MyTextFieldForm buildMyImageURLArray={buildMyImageURLArray} imageURLArrayFromUser={imageURLArrayFromUser}></MyTextFieldForm>
      case 9:
        return <p>THANKS FOR SUBMITTING - Here's a rocket 🚀 </p>
      default:
        return <MyTextFieldForm buildMyIndividualURLs={buildMyIndividualURLs} socialArrayFromUser={socialArrayFromUser}></MyTextFieldForm>
    }
  }


  // FormContainer is currently referenced at the /Formik route and contains all the sub components
  return (
    <>
      <div className="flex container " id="myContainer" >
        <div role="group" className="flex place-content-center" id="myFormGroup" >
          {renderSwitch(whichForm)}
        </div>
      </div>
    </>
  );
};

export default FormContainer;
