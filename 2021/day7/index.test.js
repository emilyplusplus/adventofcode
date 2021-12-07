const readFile = require('../utils/file')

const day7 = require('./index');

test('example input', () => {
    expect(day7(readFile('./day7/test.txt'))).toBe(0);
});