const shortid = require('shortid')
const express = require('express')
const router = express.Router()

const data = require('../data')

router.get('/', (req, res) => {
  res.status(200).send(data)
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  const short = data.find(short => short.id === id)
  if (!short) {
    res.status(404).send({
      error: 'Resource Not Found',
      message: 'No Short found matching your request.',
    })
  } else {
    res.status(200).send(short)
  }
})

router.post('/', (req, res) => {
  const body = req.body
  if (body.link) {
    const short = {
      id: shortid(),
      link: body.link,
    }
    data.push(short)
    res.status(201).send(short)
  } else {
    res.status(400).send({
      error: 'Invalid Short',
      message: 'Short requires "link" parameter',
    })
  }
})

module.exports = router
