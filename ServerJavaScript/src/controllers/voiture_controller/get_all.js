const Voiture = require ('../../models/voiture');

const ShowAll = async (req, res) => {
  try {
    const allVoitures = await Voiture.find();
    return res.status(200).json({
      voitures: allVoitures,
    });
  } catch (error) {
    return res.status(400).json({
      errors: error,
    });
  }
};

module.exports = ShowAll;
