const readFile = require('../utils/file')

const day8 = require('./index');

test('example input', () => {
    expect(day8(readFile('./day8/test.txt'))).toEqual([26,61229]);
});