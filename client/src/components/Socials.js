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
            <div className="flex justify-center mt-4">
                <img className="promptsociallogo" src="https://bitesites.net/logos/pinterest.png"></img>
               </div>
                <div className="flex justify-center mt-4">
               <input className="roundme nicksinputs"></input>
               </div>
               <p id="finishsocials" className="mt-5">✅ Finish</p>
        </section>
  {/* <!-- perhaps consider putting an icon on the button conveying that the user should advance --> */}
  {/* <button aria-label="Proceed to step 2" disabled=""
    className="myButtonAdvanceClass">
    <span className="myPutAnArrowHere"></span></button> */}
    </>
  );
};

export default Profile;
