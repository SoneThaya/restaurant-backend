const router = require('express').Router();
const Menu = require('./menu-model')
const { isLoggedIn } = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
  Menu.get()
    .then(items => {
      res.status(200).json(items)
    })
    .catch(error => {
      res.status(500).json({message: error.message})
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Menu.getByItemId(id)
    .then(item => {
      res.status(200).json({item})
    })
    .catch(error => {
      res.status(500).json({message: error.message})
    })
})

router.get('/:id/menu-items', isLoggedIn, (req, res) => {
  Menu.getItemByUserId(req.params.id)
    .then(items => {
      res.status(200).json(items)
    })
    .catch(error => {
      res.status(500).json({message: error.message})
    })
})

router.post('/', isLoggedIn, (req, res) => {
  const item = req.body

  item.user_id = req.decodedToken.subject

  Menu.insert(item)
    .then((result) => {
      res.status(201).send();
    })
    .catch(error => {
      res.status(500).json({error: 'Error connecting to database.'})
    })
})

router.put('/:id', isLoggedIn, (req, res) => {
  const changes = { ...req.body, user_id: req.decodedToken.subject }
  
  const id = req.params.id;

  Menu.update(Number(id), changes)
    .then(updatedItem => {
      if (updatedItem) {
        Menu.getByItemId(id)
          .then(newItem => {
            res.status(200).json(newItem)
          })
          .catch(error => {
            res.status(500).json({message: error.message})
          })
      } else {
        res.status(400).json({message: 'That item id does not exists.'})
      }
    })
    .catch(error => {
      res.status(500).json({message: error.message})
    })
})

router.delete('/:id', isLoggedIn, (req, res) => {
  const id = req.params.id;

  Menu.remove(Number(id))
    .then((result) => {
      if (result === 1) {
        res.status(202).json({message: 'Successfully deleted item.'})
      }
    })
    .catch(error => {
      res.status(500).json({message: error.message})
    })
})

module.exports = router;