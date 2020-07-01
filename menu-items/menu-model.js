const db = require('../data/db-config');

module.exports = {
  get,
  getByItemId,
  insert,
  update,
  remove,
  getItemByUserId
}

function get() {
  return db('items')
}

function getByItemId(id) {
  return db('items').where({ id }).first();
}

function getItemByUserId(user_id) {
  return db('items')
    .where({user_id})
}

function insert(newItem) {
  return db('items')
    .insert(newItem)
}

function remove(id) {
  return db('items').where({id}).del()
}

function update(id, changes) {
  return db('items').where({id}).update(changes)
}