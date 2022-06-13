import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const Signup = ({setAuthState}) => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });
console.log(data);
      setAuthState(data.addUser.token);
      navigate('/buildbitesite');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className='mr-3 specialLoginSignup'>
      <h4>Sign Up</h4>
      <div>
        <form onSubmit={handleFormSubmit} className="flex flex-col">
          <input
            className="form-input my-2"
            placeholder="Your username"
            name="username"
            type="text"
            value={formState.username}
            onChange={handleInputChange}
          />
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
  );
};

export default Signup;
