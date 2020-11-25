const Manager = require('../lib/Manager');

test("Test the Manager", () => {
  manager = new Manager("Fred Flintstone", 424242, "fred@bedrock.com", 402);

  expect(manager.getRole()).toBe("Manager")
  expect(manager.getOfficeNum()).toEqual(expect.any(Number))
});
