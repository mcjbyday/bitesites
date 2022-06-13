import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ 
    email: '', 
    password: '',
   });
  const [login] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      navigate('/buildbitesite');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <section className='ml-3 specialLoginSignup'>
        <h4>Login</h4>
        <div>
          <form onSubmit={handleFormSubmit} className="flex flex-col">
            <input
              className="form-input my-2"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleInputChange}
            />
            <input
              className="form-input my-2"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleInputChange}
            />
            <button
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
