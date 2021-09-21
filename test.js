// Functions to be tested
const isEven = require("./isEven");
const formatDate = require("./formatDate");

test("if num is even", () => {
  expect(isEven("12")).toBe(true);
});

test("if date is valid", () => {
  const validDate =
    /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  expect(formatDate("2021-09-21")).toMatch(validDate);
});
