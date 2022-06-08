import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
  me {
    _id
    username
    email
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