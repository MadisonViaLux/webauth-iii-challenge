const db = require('../data/db-config');

module.exports = {
    find,
    add,
    findBy,
    findById,
};

function find() {
    return db('deps').select('id', 'username', 'department');
}

function findBy(filter) {
    return db('deps').where(filter);
}

async function add(user) {
    const [id] = await db('deps').insert(user);
    return findById(id);
  }

function findById(id) {
    return db('deps')
      .select('id', 'username', 'department')
      .where({ id })
      .first();
  }