const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Does the Employee Object Exist", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});
