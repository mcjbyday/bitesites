import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BiteSiteCreator from './pages/BiteSiteCreator';
import Profile from './pages/Profile';
import Download from './pages/Download';
import MyProfile from './pages/MyProfile'
// import Navbar from './components/Navbar';
import FormContainer from './components/FormContainer';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<BiteSiteCreator />}
          />
          <Route
            path='/Profile'
            element={<Profile />}
          />
          <Route
            path='/Download'
            element={<Download />}
          />
          <Route
            path='/buildbitesite'
            element={<FormContainer />}
          /> 
        </Routes>
      </Router>
    </ApolloProvider>
  )
};
