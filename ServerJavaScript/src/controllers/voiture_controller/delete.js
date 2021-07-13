const Voiture = require ('../../models/voiture');

const DeleteVoiture = (req, res) => {
  const _id = req.params.id;

  Voiture.findOneAndDelete({ _id: _id }, (error, voiture) => {
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'erreur lors du suppression de la voiture',
        errors: error,
      });
    }

    if (!voiture) {
      return res.status(400).json({
        success: false,
        message: 'voiture non existante',
      });
    }

    return res.status(200).json({
      success: true,
      message: `suppression du voiture avec id: ${_id} reussit`,
      data: voiture,
    });
  });
};

module.exports = DeleteVoiture;
