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
      <section id="profile" className="background flex flex-col text-center">
        <h1 className="text-6xl">B I T E S I T E</h1>
        <img className="rounded-full my-10 mx-auto" src="https://bitesites.net/assets/favicon.png"></img>
        <Navbar />
      </section>
    </>
  );
};

export default Home;
