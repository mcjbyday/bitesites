import React, { useState, useEffect } from 'react';
import downloadFile from './CreateDownloadVariant'
import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';

import { SAVE_BITESITE } from '../utils/mutations';
// import { saveSoMeIds, getSavedSoMeIds } from '../utils/localStorage';

const DownloadVariant = ({myFinalForm}) => {
  // candidate state function
  // const [selectedSoMes, setSelectedSoMes] = useState([]);

  return (
    <>
    <div className="flex-cols space-y-8 ">
        <button className="profilebuttons hover:bg-gray-800 bg-black text-gray-300 hover:text-gray-100 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-xl font-light mt-5 mx-24" onClick={()=>downloadFile(myFinalForm)}>Download Page</button>
        <p>THANKS FOR SUBMITTING - Here's a rocket 🚀 </p>
        <pre
          style={{
            fontSize: '.65rem',
            padding: '.25rem .5rem',
            overflowX: 'scroll',
          }}
        >
          {JSON.stringify(myFinalForm, null, 2)}
        </pre>
    </div>
    </>
  );
};

export default DownloadVariant;
