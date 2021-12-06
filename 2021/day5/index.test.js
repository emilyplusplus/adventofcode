const readFile = require('../utils/file')

const day5 = require('./index');

test.skip('example input', () => {
    expect(day5(readFile('./day5/test.txt'))).toEqual([5,0]);
});