const Engineer = require('../lib/Engineer');

test("Test the Engineer", () => {
  engineer = new Engineer('George Jetson', 4242, 'jetson@spaceleysprockets.com', 'Engineer', 'jetsonRudionoff.github.io');

  expect(engineer.getOther()).toEqual(expect.any(String));
  expect(engineer.getRole()).toBe('Engineer');
});