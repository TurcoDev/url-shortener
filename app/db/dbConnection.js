const mongoose = require('mongoose');

// const uri = `mongodb+srv://${usuario}:${password}@cluster0.ncdk5.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const uri = `mongodb://127.0.0.1:27017/url_shortener`;

mongoose.connect(uri)
  .then(() => console.log('conectado a mongodb 💪')) 
  .catch(e => console.log('error de conexión:', e))