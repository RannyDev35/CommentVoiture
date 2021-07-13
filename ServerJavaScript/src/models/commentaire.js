const mongoose = require('mongoose')
const { Schema } = mongoose;

const CommentaireSchema = new Schema(
  {
    content: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    voitureId: {
      type: String,
      required: true,
    },  
  },
  { timestamps: true }
);

const Commentaire = mongoose.model(
  'Commentaire',
  CommentaireSchema
);

module.export =  Commentaire;
