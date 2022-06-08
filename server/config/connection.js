const mongoose = require('mongoose');

// database name is googlEbooks as indicated by url below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/biteSiteDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
