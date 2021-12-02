const readFile = require('../utils/file')

const day1 = require("./index");

test("example input", () => {
  expect(day1(readFile('./day1/test.txt'))).toEqual([7, 5]);
});
