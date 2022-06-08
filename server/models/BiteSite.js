const { Schema } = require('mongoose');

const biteSiteSchema = new Schema({
  facebook: {
    type: String,
  },
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

module.exports = biteSiteSchema;
