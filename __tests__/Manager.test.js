const Manager = require('../lib/Manager');

test("Test the Manager", () => {
  manager = new Manager('Fred Flintstone', 424242, 'fred@bedrock.com', 'Manager', 402);

  expect(manager.getRole()).toBe('Manager')
  expect(manager.getOther()).toEqual(expect.any(Number))
});
