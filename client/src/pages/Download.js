import React, { useState, useEffect } from 'react';
import downloadFile from '../components/CreateDownload'
import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';

import { SAVE_BITESITE } from '../utils/mutations';
// import { saveSoMeIds, getSavedSoMeIds } from '../utils/localStorage';

const Download = () => {
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
    <div role="group" className="max-w-sm" id="myPageBoundary" >

        <button className="profilebuttons hover:bg-gray-800 bg-black text-gray-300 hover:text-gray-100 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-xl font-light mt-5 mx-24" onClick={downloadFile}>Download Page</button>
    </div>
  {/* <!-- perhaps consider putting an icon on the button conveying that the user should advance --> */}
  {/* <button aria-label="Proceed to step 2" disabled=""
    className="myButtonAdvanceClass">
    <span className="myPutAnArrowHere"></span></button> */}
    </>
  );
};

export default Download;
