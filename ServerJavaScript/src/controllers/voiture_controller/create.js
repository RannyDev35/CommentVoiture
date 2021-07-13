const Voiture = require ('../../models/voiture');

const CreateVoiture = (req, res) => {
  const _marque = req.body.marque;
  const _model = req.body.model;
  const _num = req.body.numero;
  // const _image = req.file ? req.file.location : '';

  const voiture = new Voiture({
    marque: _marque,
    model: _model,
    numero: _num,
    // image: _image,
  });

  voiture.save((error) => {
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'erreur lors de la creation de la voiture',
        errors: error,
      });
    }

    return res.status(201).json({
      succes: true,
      message: "voiture created",
      data: voiture,
    });
  });
};

module.exports =  CreateVoiture;
