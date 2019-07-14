require('dotenv').config()
const app = require('./app')
const config = require('./config')

app.listen(config.get('port'), () => {
  console.log(`Server started listening on port ${config.get('port')}...`)
})
