const mongoose = require('mongoose');

const ShortUrlSchema = new mongoose.Schema({
  url: String,
  short: String,
  date: Date,
});

// Crear el modelo
const ShortUrl = mongoose.model('short_url', ShortUrlSchema);

module.exports = ShortUrl;