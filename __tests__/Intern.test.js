
const Intern = require('../lib/Intern');

test("Test the Intern", () => {
  intern = new Intern("Nick Campbell", 42, "nick@google.com", "Fixion School");

  expect(intern.getRole()).toBe('Intern')
  expect(intern.getSchool()).toEqual(expect.any(String));
});