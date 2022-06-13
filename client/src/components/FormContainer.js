import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';

// each of these components uses Formik and component objects to render the appropriate field / option to the user based on the properties of the website builder output
import SandEmbedForm from './SandEmbedForm';
import SandSocialForm from './SandSocialForm'
import TextFieldFormURLs from './TextFieldFormURLs';
import DownloadVariant from './DownloadVariant';

import Auth from '../utils/auth';

import { SAVE_BITESITE } from '../utils/mutations';
import TextFieldFormImageNameplate from './TextFieldFormImageNameplate';

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
  const [imagePlusNameplateFromUser, setImagePlusNameplateFromUser] = useState([]);

  // this counter tracks the number of social entries they provided in part 2 of the submission flow
  const [formCounter1, setFormCounter1] = useState(0);

  // this logic governs which component to serve to the user depending on their current place in the form flow
  const [whichForm, setWhichForm] = useState(0)

  // this gathers user input from embed radio options form component and is passed using props
  function buildMyEmbedChoice(values) {
    console.log(values)
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
    console.log(values)
    if (formCounter1 < socialArrayFromUser.length - 1) {
      setFormCounter1(formCounter1 + 1)
    }
    else {
      setWhichForm(whichForm + 1);
    }
  }

  // this gathers user input pertaining to their desired profile avatar URL
  // it builds the array depending on the number and type of social medias the user selected in their checklist
  function buildMyImageURLArray(values) {
    setImagePlusNameplateFromUser(values)
    setWhichForm(9);
  }

  // this is for debug purposes to display the form submission content at any point in the form entry flow
  // useEffect(() => { console.log("MyFinalForm is... \n", myFinalForm) })

  // this is the data blob that can passed to the download utility via props
  let myFinalForm = {
    embed: embedChoiceFromUser,
    social: socialArrayFromUser,
    socialURL: socialURLArrayFromUser,
    imagePlusNameplate: imagePlusNameplateFromUser,
  }

  // let myFinalForm = {
  //   embed: "snapchattest",
  //   social: [
  //     "Facebook",
  //     "Spotify",
  //     "Instagram", 
  //     "delta", 
  //     "epsilon",
  //     "zeta",
  //     "eta",
  //     "theta",
  //     "iota",
  //     "kappa",
  //     "lamda",
  //     "mu"],
  //   socialURL: [
  //     "https://www.facebook.com/myspacetom",
  //     "https://open.spotify.com/user/122330043",
  //     "https://www.instagram.com/paulmccartney/", 
  //     "socialURL_delta", 
  //     "socialURL_epsilon",
  //     "socialURL_zeta",
  //     "socialURL_eta",
  //     "socialURL_theta",
  //     "socialURL_iota",
  //     "socialURL_kappa",
  //     "socialURL_lamda",
  //     "socialURL_mu"],
  //     imagePlusNameplate: [
  //       "PandaThaGod",
  //       "https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73047.jpg?size=338&ext=jpg",
  //       "spotify.com",
  //       "mr steal yo girl",
  //       "#e66465"]
  // }

  // this renderSwitch statement governs which form component is displayed at any particular time. users must refresh the page if they want to clear or reset where they are in the form submission process

  function renderSwitch(whichForm) {
    switch (whichForm) {
      case 0:
        // get social profile embed from user
        return <SandEmbedForm buildMyEmbedChoice={buildMyEmbedChoice}></SandEmbedForm>
      case 1:
        // get preferred social profile links from user
        return <SandSocialForm buildMySocialChoice={buildMySocialChoice}></SandSocialForm>
    // TODO need to add an embed link URL entry area.. may be most appropriate right after single site selection? or after remaining socials have been added
      case 2:
        // get social profile URLs from user
        return <TextFieldFormURLs formCounter1={formCounter1} buildMyIndividualURLs={buildMyIndividualURLs} socialArrayFromUser={socialArrayFromUser}></TextFieldFormURLs>
      case 3:
        // get image URL from user
        return <TextFieldFormImageNameplate buildMyImageURLArray={buildMyImageURLArray} ></TextFieldFormImageNameplate>
      case 9:
        return (<DownloadVariant myFinalForm={myFinalForm} > </DownloadVariant> )
      default:
        return (
        <>
        <p>Big Problema</p>
        <pre
          style={{
            fontSize: '.65rem',
            padding: '.25rem .5rem',
            overflowX: 'scroll',
          }}
        >
          {JSON.stringify(myFinalForm, null, 2)}
        </pre>
      </>
      )
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
