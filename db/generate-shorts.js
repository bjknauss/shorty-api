const faker = require('faker')
faker.seed(12345)

const IDCHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split('')

function generateShortId() {
  const id = []
  for (let i = 0; i < 10; i++) {
    id.push(faker.random.arrayElement(IDCHARS))
  }
  return id.join('')
}

function generateShort() {
  return {
    id: generateShortId(),
    link: faker.internet.url(),
    created_at: faker.date.past(2),
  }
}

function generateShorts(numOfShorts = 5000) {
  const shorts = []
  for (let i = 0; i < numOfShorts; i++) {
    shorts.push(generateShort())
  }
  return shorts
}

module.exports = generateShorts
