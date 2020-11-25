const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test("Test the Intern", () => {
  intern = new Intern("Fred Flintstone", 42, "Fred.flinstone@bedrock.com", "school of hard rocks");

  expect(intern.getRole()).toBe('Intern')
  expect(intern.getSchool()).toEqual(expect.any(String));
});