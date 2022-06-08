import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
// import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';
// import { searchGoogleSoMes } from '../utils/queries';
import { SAVE_BITESITE } from '../utils/mutations';
// import { saveSoMeIds, getSavedSoMeIds } from '../utils/localStorage';

const BiteSiteCreator = () => {
  // create state for holding returned google api data
  const [selectedSoMes, setSelectedSoMes] = useState([]);
  

  // // create function to handle saving a book to our database
  // const handleSaveSoMe = async () => {
  //   // find the book in `searchedSoMes` state by the matching id
   
  //   // get token
  //   // const token = Auth.loggedIn() ? Auth.getToken() : null;
  //   // if (!token) {
  //   //   return false;
  //   // }
    
  // };

  //   facebook: {
  //   type: String,
  // },
  // instagram: {
  //   type: String,
  // },
  // tikTok: {
  //   type: String,
  // },
  // snapchat: {
  //   type: String,
  // },
  // youTube: {
  //   type: String,
  // },
  // twitter: {
  //   type: String,
  // },
  // whatsApp: {
  //   type: String,
  // },
  // linkedIn: {
  //   type: String,
  // },
  // pinterest: {
  //   type: String,
  // },
  // soundCloud: {
  //   type: String,
  // },
  // appleMusic: {
  //   type: String,
  // },
  // spotify: {
  //   type: String,
  // },

  return (
    <>
    <div role="group">
    <h2 class="myTitleForUserClass" id="SoMeEmbedSelect">Which social would you like to embed?</h2>
    <p class="myInstructionsToUserClass" id="SoMeEmbedSelectInstruct">Select one SoMe to embed. (required)</p>
    <div class="grid grid-rows-3 grid-flow-col gap-5">
          <div class="p-3 rounded-lg shadow-lg bg-pink-500">
              <input class="ui-input__checkboxBlock"
                  id="mySoMe1"
                  name="mySoMe1_Unknown" type="checkbox" value=""></input>
              <label class="myClassLabel"
                  for="mySoMe1" >mySoMe1</label>
          </div>
          <div class="p-3 rounded-lg shadow-lg bg-pink-500">
              <input class="ui-input__checkboxBlock"
                  id="mySoMe2"
                  name="mySoMe2_Unknown" type="checkbox" value=""></input>
                  <label class="myClassLabel"
                  for="mySoMe2" >mySoMe2</label>
          </div>
          <div class="p-3 rounded-lg shadow-lg bg-pink-500">
              <input class="ui-input__checkboxBlock" id="mySoMe3"
                  name="mySoMe3_Unknown" type="checkbox" value=""></input>
                  <label class="myClassLabel"
                  for="mySoMe3" >mySoMe3</label>
          </div>
          <div class="p-3 rounded-lg shadow-lg bg-pink-500">
              <input class="ui-input__checkboxBlock"
                  id="mySoMe1"
                  name="mySoMe1_Unknown" type="checkbox" value=""></input>
              <label class="myClassLabel"
                  for="mySoMe1" >mySoMe1</label>
          </div>
          <div class="p-3 rounded-lg shadow-lg bg-pink-500">
              <input class="ui-input__checkboxBlock"
                  id="mySoMe2"
                  name="mySoMe2_Unknown" type="checkbox" value=""></input>
                  <label class="myClassLabel"
                  for="mySoMe2" >mySoMe2</label>
          </div>
          <div class="p-3 rounded-lg shadow-lg bg-pink-500">
              <input class="ui-input__checkboxBlock" id="mySoMe3"
                  name="mySoMe3_Unknown" type="checkbox" value=""></input>
                  <label class="myClassLabel"
                  for="mySoMe3" >mySoMe3</label>
          </div>
    </div>
</div>
  {/* <!-- perhaps consider putting an icon on the button conveying that the user should advance --> */}
  {/* <button aria-label="Proceed to step 2" disabled=""
    class="myButtonAdvanceClass">
    <span class="myPutAnArrowHere"></span></button> */}
    </>
  );
};

export default BiteSiteCreator;
