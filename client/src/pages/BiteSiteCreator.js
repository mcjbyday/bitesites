import React, { useState, useEffect } from 'react';
import downloadFile from '../components/CreateDownload'
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import { SAVE_BITESITE } from '../utils/mutations';


const BiteSiteCreator = () => {
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
            <div className="grid gap-4 place-content-center specialGrid">
                <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id="SoMeTest1"
                            name="SoMeTest1" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="SoMeTest1" >Lorem ipsum</label>
                    </div>
                    <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id="SoMeTest2"
                            name="SoMeTest2" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="SoMeTest2" >Lorem ipsum</label>
                    </div>
                    <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id="SoMeTest3"
                            name="SoMeTest3" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="SoMeTest3" >Lorem ipsum</label>
                    </div>
                    <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id=""
                            name="" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="" >Lorem ipsum</label>
                    </div>
                    <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id=""
                            name="" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="" >Lorem ipsum</label>
                    </div>
                    <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id=""
                            name="" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="" >Lorem ipsum</label>
                    </div>
                    <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id=""
                            name="" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="" >Lorem ipsum</label>
                    </div>
                    <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id=""
                            name="" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="" >Lorem ipsum</label>
                    </div>
                    <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id=""
                            name="" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="" >Lorem ipsum</label>
                    </div>
                    <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id=""
                            name="" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="" >Lorem ipsum</label>
                    </div>
                    <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id=""
                            name="" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="" >Lorem ipsum</label>
                    </div>
                    <div className="aspect-square border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{backgroundColor:"var(--darkest)"}} >
                        <input className="ui-input__checkboxBlock"
                            id=""
                            name="" type="checkbox" value=""></input>
                        <label className="myClassLabel"
                            for="" >Lorem ipsum</label>
                    </div>
            </div>        
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

export default BiteSiteCreator;
