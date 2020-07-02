const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const usersRouter = require('../users/users-router');
const menuRouter = require('../menu-items/menu-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', usersRouter);
server.use('/api/menu', menuRouter);

server.get('/', (req, res) => {
  res.json({api: 'up and running'})
})

module.exports = server;