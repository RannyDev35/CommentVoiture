const Voiture = require ('../../models/voiture');
const User = require("../../models/user")

const CommentVoiture = async (req, res) => {
  const _commentaire = req.body.uncommentaire;
  const _user = req.params.idUser
  const _id = req.params.idVoiture
  const objecUser = await User.findOne({ _id: _user })

  Voiture.findOne({ _id: _id }, (error, voiture) => {
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'erreur lors de recherche du produit',
        errors: error,
      });
    }

    if (!voiture) {
      return res.status(404).json({
        success: false,
        message: 'produit non existant',
      });
    }

    if (voiture) {
      voiture.marque = voiture.marque;
      voiture.model = voiture.model;
      voiture.numero = voiture.num;
      voiture.commentaire.push({
        commentaire: _commentaire,
        user: objecUser
      });
      voiture.save((error) => {
        if (error) {
          return res.status(400).json({
            success: false,
            message: 'erreur lors de la mise a jour de produit',
            errors: error,
          });
        }

        return res.status(200).json({
          success: true,
          message: 'Le commenter est reussit',
          data: voiture,
        });
      });
    }
  });
} 

module.exports = CommentVoiture;
