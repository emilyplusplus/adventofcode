const fs = require('fs')

function readFile(path) {
  try {
    const data = fs.readFileSync(path, 'utf8')
    return data.split('\n')
  } catch (err) {
    console.error(err)
    return []
  }
}

module.exports = readFile