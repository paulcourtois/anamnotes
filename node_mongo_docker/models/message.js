const mongoose = require('mongoose');

const Schema = mongoose.Schema

// On utilise mongoose pour faciliter la mise en forme des données dans notre DB Mongo. On crée un modèle de data pour nos messages
const messageSchema = new Schema(
  {
    content:{
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true
    },
  },
  { timestamps: true}
)

module.exports = mongoose.model('Message', messageSchema)