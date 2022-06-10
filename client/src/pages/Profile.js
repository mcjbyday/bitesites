import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import downloadFile from '../components/CreateDownload'
import Auth from '../utils/auth';
import script from '../utils/script';
// import { saveSoMeIds, getSavedSoMeIds } from '../utils/localStorage';

const Profile = () => {
  // create state for holding returned google api data
  const [selectedSoMes, setSelectedSoMes] = useState([]);
  
  return (
    <>
        <section id="profile" class="background">
                <div class="flex justify-center">
                </div>
                <div class="h-4"></div>
                <img id="pfp" class="mx-auto mt-5 mb-3" src="https://www.letsgetready.org/wp-content/uploads/2020/07/blank-300x300.png"></img>
                <div class="h-4"></div>
                <div class="flex justify-center">
                    <p class="font-light text-3xl text-white">My username here</p>
                </div>
                <div class="h-4"></div>
        <div id="this">
            <button  class="profilebuttons pop hover:bg-gray-800 bg-black text-gray-300 hover:text-gray-100 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-xl font-light mt-5 mx-24">
                Edit My Links
            </button>
            <button  class="profilebuttons hover:bg-gray-800 bg-black text-gray-300 hover:text-gray-100 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-xl font-light mt-5 mx-24">
                Download / Email Page
            </button>
        </div>
        </section>
  {/* <!-- perhaps consider putting an icon on the button conveying that the user should advance --> */}
  {/* <button aria-label="Proceed to step 2" disabled=""
    className="myButtonAdvanceClass">
    <span className="myPutAnArrowHere"></span></button> */}
    </>
  );
};

export default Profile;
