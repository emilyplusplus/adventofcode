const readFile = require('../utils/file')

const day6 = require('./index');

test('example input, 18 days', () => {
    expect(day6(readFile('./day6/test.txt', true), 18)).toBe(26);
});

test('example input, 80 days', () => {
    expect(day6(readFile('./day6/test.txt', true), 80)).toBe(5934);
});