// Functions to be tested
const isEven = require("./isEven");

test("if num is even", () => {
  expect(isEven("12")).toBe(true);
});
