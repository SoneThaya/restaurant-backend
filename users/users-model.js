const db = require('../data/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
}

function find() {
  return db('users').select('id', 'username').orderBy('id');
}

function findBy(filter) {
  return db('users as u')
    .where(filter)
    .orderBy('u.id')
}

function add(user) {
  return db('users')
    .insert(user)
}

function findById(id) {
  return db('users').where({id}).first()
}

function remove(id) {
  return db('users').where({ id }).del();
}