const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.js');
const { check, validationResult } = require('express-validator');
const Worker = require('../../models/worker');
const User = require('../../models/User');

//. create a profile worker
router.post(
  '/',

  [
    auth,
    [
      check('firstname', 'firstname is not Valid')
        .not()
        .isEmpty(),

      check('lastname', 'lastname is not Valid')
        .not()
        .isEmpty(),
      check('metier', 'metier is not Valid')
        .not()
        .isEmpty(),
      check('adresse', 'addresse is not Valid')
        .not()
        .isEmpty(),

      check('tel', 'tel is not valid').isNumeric({
        no_symbols: true,
      }),
      check('prix', 'prix is not valid').isNumeric({
        no_symbols: true,
      }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstname, lastname, metier, adresse, tel, prix } = req.body;
    try {
      const newWorker = new Worker({
        user: req.user.id,
        firstname,
        lastname,
        metier,
        adresse,
        tel,
        prix,
      });

      const worker = await newWorker.save();
      // and as a response we send back the profile
      res.json(worker);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//. get my profile

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Worker.findOne({
      user: req.user.id,
    }).populate('user', ['email', 'typeuser']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//. get all workers
router.get('/', async (req, res) => {
  try {
    const profiles = await Worker.find().populate('user', ['email', 'meetings']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
