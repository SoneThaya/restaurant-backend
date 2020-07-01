const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = require('express').Router();

const Users = require('../users/users-model')
const { isValid } = require('../users/users-service')

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcryptjs.hashSync(user.password, 14);
  user.password = hash;
  Users.add(user)
    .then((id) => res.status(201).send(user))
    .catch((err) => res.status(500).json({ errMessage: err.message }));
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (isValid(req.body)) {
    Users.findBy({ username: username })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = createToken(user);

          res.status(200).json({ token, message: 'Welcome' })
        } else {
          res.status(401).json({ message: 'Invalid credentials.' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: 'Please provide username and password.'
    });
  }
});

function createToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  }
  const options = {
    expiresIn: '5d',
  }
  return jwt.sign(payload, process.env.JWTKEY, options)
}


module.exports = router;