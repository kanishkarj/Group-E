const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017`);
require('../models');
require('./passport');

module.exports = {
  mongoose,
}
