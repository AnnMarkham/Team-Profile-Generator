const Engineer = require('../lib/Engineer');

test("Test the Engineer", () => {
  engineer = new Engineer('George Jetson', 4242, 'jetson@spaceleysprockets.com', 'jetsonRudionoff.github.io');

  expect(engineer.getRole()).toBe("Engineer")
  expect(engineer.getGithub()).toEqual(expect.any(String));
});