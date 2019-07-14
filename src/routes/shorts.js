const shortid = require('shortid')
const asyncHandler = require('express-async-handler')
const isValidUrl = require('is-url-http')
const express = require('express')
const router = express.Router()

const shorts = require('../db/shorts')

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const s = await shorts.getShorts()
    res.status(200).send(s)
  }),
)

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id
    const short = await shorts.getShort(id)

    if (!short) {
      res.status(404).send({
        error: 'Resource Not Found',
        message: 'No Short found matching your request.',
      })
    } else {
      res.status(200).send(short)
    }
  }),
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const body = req.body
    if (body.link) {
      if (isValidUrl(body.link)) {
        const short = {
          id: shortid(),
          link: body.link,
        }
        await shorts.postShort(short)
        res.status(200).send(short)
      } else {
        res.status(400).send({
          error: 'Invalid link.',
          message: 'Link is not a valid http url.',
        })
      }
    } else {
      res.status(400).send({
        error: 'Invalid Short',
        message: 'Short requires "link" parameter',
      })
    }
  }),
)

module.exports = router
