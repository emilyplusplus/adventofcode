const fs = require('fs')

function readFile(path, raw) {
  try {
    const data = fs.readFileSync(path, 'utf8')
    return (raw === true) ? data : data.split('\n')
  } catch (err) {
    console.error(err)
    return []
  }
}

module.exports = readFile