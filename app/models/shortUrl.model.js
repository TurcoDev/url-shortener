import { Schema, model, models } from 'mongoose';

const ShortUrlSchema = new Schema({
  url: String,
  short: String,
  date: Date,
});

// Crear el modelo
const ShortUrl = models.Short_url || model('Short_url', ShortUrlSchema);

export default ShortUrl;