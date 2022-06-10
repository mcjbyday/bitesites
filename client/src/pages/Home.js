import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import SignUpForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'
import Auth from '../utils/auth';
import script from '../utils/script';
// import { saveSoMeIds, getSavedSoMeIds } from '../utils/localStorage';

const Home = () => {
  // create state for holding returned google api data
  const [selectedSoMes, setSelectedSoMes] = useState([]);

  return (
    <>
      <section id="profile" className="background flex flex-col content-center align-text-center">
        <Navbar />
        <img id="pfp" className="mx-auto mt-5 mb-3" src="https://bitesites.net/assets/favicon.png"></img>
        <h1 className="font-light text-3xl text-white">SITEBITES</h1>
      </section>
    </>
  );
};

export default Home;
