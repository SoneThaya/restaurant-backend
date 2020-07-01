const router = require('express').Router();

const Users = require('./users-model');

const { isLoggedIn } = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json({users, decodedToken: req.decodedToken})
    })
    .catch(error => res.send(error))
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  Users.findById(id)
    .then(user => {
      res.status(200).json({user})
    })
    .catch(error => {
      res.status(500).json({message: error.message})
    })
})

router.delete('/:id', isLoggedIn, (req, res) => {
  Users.remove(req.params.id)
    .then(count => {
      if (count === 1) {
        res.status(204).send()
      } else {
        res.status(500).json({error: 'Cannot delete user.'})
      }
    })
    .catch(error => {
      res.status(500).json({error: 'Server error'})
    })
})

module.exports = router;