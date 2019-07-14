const pool = require('./pool')

async function getShorts(params = { limit: 100, offset: 0 }) {
  const { rows } = await pool.query('SELECT * FROM shorts LIMIT $1 OFFSET $2', [
    params.limit,
    params.offset,
  ])
  return rows
}

async function getShort(shortId) {
  const { rows } = await pool.query('SELECT * FROM shorts WHERE id = $1', [shortId])
  return rows[0]
}

async function postShort(short) {
  const { rows } = await pool.query('INSERT INTO shorts (id, link) VALUES ($1, $2)', [
    short.id,
    short.link,
  ])
  return rows
}

module.exports = {
  getShort,
  getShorts,
  postShort,
}
