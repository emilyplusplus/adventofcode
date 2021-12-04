const readFile = require('./utils/file')

const day1 = require('./day1/')
const day2 = require('./day2/')
const day3 = require('./day3/')

console.log(day1(readFile('./day1/input.txt')))
console.log(day2(readFile('./day2/input.txt')))
console.log(day3(readFile('./day3/test.txt')))