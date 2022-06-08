import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BITESITE = gql`
  mutation saveBiteSite($facebook: String, $instagram: String, $tikTok: String, $snapchat: String, $youTube: String, $twitter: String, $whatsApp: String, $linkedIn: String, $pinterest: String, $soundCloud: String, $appleMusic: String, $spotify: String) {
    saveBiteSite(facebook: $facebook, instagram: $instagram, tikTok: $tikTok, snapchat: $snapchat, youTube: $youTube, twitter: $twitter, whatsApp: $whatsApp, linkedIn: $linkedIn, pinterest: $pinterest, soundCloud: $soundCloud, appleMusic: $appleMusic, spotify: $spotify) {
      _id
      username
      biteSites {
        _id
        facebook
        instagram
        tikTok
        snapchat
        youTube
        twitter
        whatsApp
        linkedIn
        pinterest
        soundCloud
        appleMusic
        spotify
      }
    }
  }
`;

export const REMOVE_BITESITE = gql`
  mutation removeBiteSite($id: ID!) {
    removeBiteSite(_id: $id) {
      _id
      username
      biteSites {
        _id
        facebook
        instagram
        tikTok
        snapchat
        youTube
        twitter
        whatsApp
        linkedIn
        pinterest
        soundCloud
        appleMusic
        spotify
      }
    }
  }
`;
