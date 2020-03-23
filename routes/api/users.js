const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

//. Route : Register a user
router.post(
  '/',
  [
    check('email', 'email is required').isEmail(),
    check('typeuser', 'type user is required')
      .not()
      .isEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({
      min: 3,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, typeuser, password } = req.body; // we get data from the request body
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }
      user = new User({
        email,
        typeuser,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save(); //return a promise so we add await in front of

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token }); // here we return the token to the user
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
//. add myself to worker meetings
router.put('/reservworker', auth, async (req, res) => {
  const { name, adresse, tel, date, id } = req.body;

  const client = { name, adresse, tel, date, id: req.user.id };

  try {
    const worker = await User.findOne({ _id: id });

    worker.meetings.unshift(client);
    await worker.save();
    res.json(worker);
  } catch (error) {
    throw new Error(error);
  }
});
//. add worker to my meetings
router.put('/reservclient', auth, async (req, res) => {
  const { name, adresse, tel, date, id } = req.body;

  const worker = { name, adresse, tel, date, id };

  try {
    const client = await User.findOne({ _id: req.user.id });

    client.meetings.unshift(worker);
    await client.save();
    res.json(client);
  } catch (error) {
    throw new Error(error);
  }
});

//. edit meeting infos in worker meetings
router.put('/editreservationworker', auth, async (req, res) => {
  const { name, adresse, tel, date, id } = req.body;
  try {
    const worker = await User.findOne({ _id: id });
    console.log(worker);
    worker.meetings = worker.meetings.map(el => {
      if (el.id == req.user.id) {
        el.name = name;
        el.adresse = adresse;
        el.tel = tel;
        el.date = date;
      }
      return el;
    });

    await worker.save();

    res.json(worker);
  } catch (error) {
    throw new Error(error);
  }
});
//. edit meeting infos in my meetings
router.put('/editreservationclient', auth, async (req, res) => {
  const { name, adresse, tel, date, id } = req.body;
  try {
    const client = await User.findOne({ _id: req.user.id });

    client.meetings = client.meetings.map(el => {
      if (el.id == id) {
        el.name = name;
        el.adresse = adresse;
        el.tel = tel;
        el.date = date;
      }
      return el;
    });
    await client.save();
    res.json(client);
  } catch (error) {
    throw new Error(error);
  }
});

//. annuler reservation : delete client from worker meetings
router.put('/deletereservationworker', auth, async (req, res) => {
  const { id } = req.body;
  try {
    const worker = await User.findOne({ _id: id });

    worker.meetings = worker.meetings.filter(el => el.id != req.user.id);

    await worker.save();
    res.json(worker);
  } catch (error) {
    throw new Error(error);
  }
});
//. annuler reservation : delete worker from my meetings // annulation from worker
router.put('/deletereservationclient', auth, async (req, res) => {
  const { id } = req.body;
  try {
    const client = await User.findOne({ _id: req.user.id });

    client.meetings = client.meetings.filter(el => el.id != id);

    await client.save();
    res.json(client);
  } catch (error) {
    throw new Error(error);
  }
});

//. confirmation in worker meeting
router.put('/confirmreservationworker', auth, async (req, res) => {
  const { id } = req.body;
  try {
    const worker = await User.findOne({ _id: req.user.id });

    worker.meetings.map(el => {
      if (el.id === id) {
        el.status = 'confirmed';
      }
      return el;
    });
    await worker.save();
    res.json(worker);
  } catch (error) {
    throw new Error(error);
  }
});
//. confirmation in client meetings
router.put('/confirmreservationclient', auth, async (req, res) => {
  const { id } = req.body;
  try {
    const client = await User.findOne({ _id: id });

    client.meetings.map(el => {
      if (el.id === req.user.id) {
        el.status = 'confirmed';
      }
      return el;
    });
    await client.save();
    res.json(client);
  } catch (error) {
    throw new Error(error);
  }
});

//. refuser reservation : worker: go to client and set status declined
router.put('/declinereservationclient', auth, async (req, res) => {
  const { id } = req.body;
  try {
    const client = await User.findOne({ _id: id });

    client.meetings.map(el => {
      if (el.id === req.user.id) {
        el.status = 'declined';
      }
      return el;
    });
    await client.save();
    res.json(client);
  } catch (error) {
    throw new Error(error);
  }
});
//. refuser reservation : worker: go to client and set status declined
router.put('/declinereservationworker', auth, async (req, res) => {
  const { id } = req.body;
  try {
    const worker = await User.findOne({ _id: req.user.id });

    worker.meetings.map(el => {
      if (el.id === id) {
        el.status = 'declined';
      }
      return el;
    });
    await worker.save();
    res.json(worker);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
