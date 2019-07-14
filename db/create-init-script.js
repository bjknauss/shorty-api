const fs = require('fs')
const path = require('path')

/**
 * Generates an init script that creates a table based off the template given and inserts the data into the created table.
 *
 * @param {string} templateName The name of the template containing the SQL table creation. The template file name should not include the file extension and should match the table name.
 * @param {Array<String>} orderedColumnNames Column names in SQL insert order
 * @param {Array<Object>} data Data to be inserted into the column
 */
function createInitScript(templateName, orderedColumnNames, data) {
  const templateFilename = `${templateName}.sql`
  const now = Date.now()
  const templatePath = path.resolve(__dirname, 'templates', templateFilename)
  const destinationPath = path.resolve(__dirname, 'init-scripts', `${now}-${templateFilename}`)

  const templateData = fs.readFileSync(templatePath, { encoding: 'utf8' })
  let fileData = templateData + createInsertStatement(templateName, orderedColumnNames, data)
  console.log(`Writing to file ${destinationPath}:`)
  fs.writeFileSync(destinationPath, fileData, { encoding: 'utf8', flag: 'w' })
}

/**
 * Generates an init script that creates a table based off the template given and inserts the data into the created table.
 *
 * @param {string} tableName Name of the table
 * @param {Array<String>} orderedColumnNames Column names in SQL insert order
 * @param {Array<Object>} data Data to be inserted into the column
 */
function createInsertStatement(tableName, orderedColumnNames, data) {
  let values = data.map(row => {
    const orderedValues = orderedColumnNames.map(col => toSQLValue(row[col]))
    return orderedValues.join(', ')
  })
  let valueRows = values.map(val => `(${val})`)
  let statement =
    `INSERT INTO ${tableName}\n` +
    `(${orderedColumnNames.join(',')})\n` +
    `  VALUES\n${valueRows.join(',\n')};\n`
  return statement
}

function toSQLValue(val) {
  if (typeof val === 'number') {
    return val.toString()
  }
  if (val instanceof Date) {
    return `'${val.toISOString()}'`
  }
  return `'${val.toString()}'`
}

module.exports = createInitScript
