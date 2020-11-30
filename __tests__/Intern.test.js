
const Intern = require('../lib/Intern');

test("Test the Intern", () => {
  intern = new Intern('Nick Campbell', 42, 'nick@google.com', 'Intern', 'Fixion School');

  expect(intern.getOther()).toEqual(expect.any(String));
  expect(intern.getRole()).toBe('Intern');
});