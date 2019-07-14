const convict = require('convict')
const yaml = require('js-yaml')
const schema = require('./schema')
const init = require('./init')

convict.addParser({ extension: ['yml', 'yaml'], parse: yaml.safeLoad })

const config = convict(schema)

init(config)

module.exports = config
