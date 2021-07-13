const mongoose = require('mongoose');
const { Schema } = mongoose;

const VoitureSchema = new Schema(
  {
    marque: {
      type: String,
      max: 45,
      trim: true,
    },
    model: {
      type: String,
      max: 45,
      trim: true,
    },
    numero: {
      type: String,
      max: 10,
      trim: true,
    },
    image: {
      type: String,
    },
    commentaire: {
      type : Array ,
      "default" : [] },
  },
  { timestamps: true }
);

const Voiture = mongoose.model("Voiture", VoitureSchema);

module.exports = Voiture;
