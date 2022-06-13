import React from 'react';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

const Navbar = () => {
  return (
    <>
    <section className="flex justify-center">
      <SignUpForm />
      <LoginForm />
    </section>
    </>
  );
};

export default Navbar;
