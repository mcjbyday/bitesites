import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';

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
