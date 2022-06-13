import React from 'react';
import Navbar from '../components/Navbar'

const Home = ({setAuthState}) => {
  return (
    <>
      <section id="profile" className="background flex flex-col text-center">
        <h1 className="text-6xl specialHeader">B I T E S I T E S</h1>
        <img className="rounded-full my-10 mx-auto" src="https://bitesites.net/assets/favicon.png"></img>
        <Navbar setAuthState={setAuthState} />
      </section>
    </>
  );
};

export default Home;
