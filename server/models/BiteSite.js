const { Schema } = require('mongoose');

const biteSiteSchema = new Schema({
  namePlate: {
    type: String,
  },
  footerNamePlate: {
    type: String,
  },
  avatar: {
    type: String,
  },
  favicon: {
    type: String,
    default: 'https://bitesites.net/assets/favicon.png',
  },
  embed: {
    type: String,
  },
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
