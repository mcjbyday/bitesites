import React from 'react';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

const Navbar = ({setAuthState}) => {
  return (
    <>
      <section className="flex justify-center specialForm">
        <SignUpForm setAuthState={setAuthState} />
        <LoginForm setAuthState={setAuthState} />
      </section>
    </>
  );
};

export default Navbar;
