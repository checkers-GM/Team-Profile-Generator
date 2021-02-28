const Engineer = require("../lib/Engineer");

test("Did Github get created?", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Nick", 1, "testEmail@email.com", "GithubUser");
  expect(e.github).toBe(testValue);
});
