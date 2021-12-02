const readFile = require('../utils/file')

const day2 = require('./index');

test('example input', () => {
    expect(day2(readFile('./day2/test.txt'))).toEqual([150, 900]);
});