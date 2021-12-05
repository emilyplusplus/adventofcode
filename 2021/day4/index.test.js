const readFile = require('../utils/file')

const day4 = require('./index');

test('example input', () => {
    expect(day4(readFile('./day4/test.txt'))).toEqual([0,0]);
});