const generateShorts = require('./generate-shorts')
const createInitScript = require('./create-init-script')

createInitScript('shorts', ['id', 'link', 'created_at'], generateShorts())
