const readFile = require('../utils/file')

const day10 = require('./index');

test('example input', () => {
    expect(day10(readFile('./day10/test.txt'))).toEqual([0,0]);
});