const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  image: String,
  location: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema);
