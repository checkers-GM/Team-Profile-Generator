const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Does the Intern have a school?", () => {
  const testValue = "UofT";
  const e = new Intern("Nick", 1, "testEmail@email.com", "GithubUser");
  expect(e.school).toBe(testValue);
});
