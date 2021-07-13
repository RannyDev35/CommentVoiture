const User = require('../../models/user');
const jwt = require("jsonwebtoken");

const Register = (req, res) => {
  // console.log('jfjdfjkfjfdjfj')
  const _email = req.body.email;
  const _nom = req.body.nom
  const _password = req.body.password;
  // console.log('voila',_email)

  if (_email && _password) {
    // Check if User already exist
    User.findOne({ email: _email }, (error, user) => {
      if (error) {
        return res.status(400).json({
          errors: error,
        });
      }

      if (user) {
        return res.status(409).json({
          errors: `An account with email: ${_email} is already registered`,
        });
      }

      // Create new user if not already exists
      const newUser = new User({
        email: _email,
        password: _password,
        nom: _nom,
      });

      newUser.save(async (error) => {
        if (error) {
          return res.status(400).json({
            errors: error,
          });
        }

        const payload = {
          sub: newUser._id,
          email: newUser.email,
        };

        const token = await jwt.sign(payload, 'secretKey');

        return res.status(201).json({
          message: 'account registered successfully',
          data: newUser,
          token: token,
        });
      });
    });
  } else {
    return res.status(422).json({
      errors: 'email/password missing',
    });
  }

};

module.exports = Register;
