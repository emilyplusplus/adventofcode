const readFile = require('../utils/file')

const day3 = require('./index');

test.skip('example input', () => {
    expect(day3(readFile('./day3/test.txt'))).toEqual([198,230]);
});