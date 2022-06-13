import React, { useState } from 'react';
import CreateDownload from '../pages/Download';
import Profile from '../components/Socials.js';
import ImageURLS from '../components/ImageURLS.js';


export default function Container() {
  const [currentPage, setCurrentPage] = useState('');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <Profile/>;
    }
      if (currentPage === 'URLS') {
        return <ImageURLS/>;
      }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="flex justify-center">
      {/* We are passing the currentPage from state and the function to update it */}
      <a onClick={() => handlePageChange('About')}><button  class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mx-24 platformbuttons">
    Socials
    </button></a>
    <a onClick={() => handlePageChange('URLS')}><button  class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mx-24 platformbuttons">
    URLS
    </button></a></div>
    
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}