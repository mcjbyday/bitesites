const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const biteSitesSchema = new Schema({
  facebook: {
    type: String,
  },
  // saved book id from GoogleBooks
  instagram: {
    type: String,
  },
  tikTok: {
    type: String,
  },
  snapchat: {
    type: String,
  },
  youTube: {
    type: String,
  },
  twitter: {
    type: String,
  },
  whatsApp: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  pinterest: {
    type: String,
  },
  soundCloud: {
    type: String,
  },
  appleMusic: {
    type: String,
  },
  spotify: {
    type: String,
  },
});

module.exports = biteSitesSchema;
