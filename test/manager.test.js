const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { test, expect } = require("@jest/globals");

test("Does the manager have an office number?", () => {
  const testValue = 50;
  const e = new Manager("Nick", 1, "testEmail@email.com", "GithubUser");
  expect(e.officeNumber).toBe(testValue);
});
