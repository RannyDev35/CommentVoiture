const Voiture = require ('../../models/voiture') ;

const ShowOne = async (req, res) => {
  const _voitureId = req.params.voitureId;

  try {
    const voiture = await Voiture.findOne({ _id: _voitureId });

    return res.status(200).json(voiture);

  } catch (error) {

    return res.status(400).json({
      errors: error,
    });
  }
};

module.exports = ShowOne;
