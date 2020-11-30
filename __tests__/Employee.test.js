const Employee = require('../lib/Employee');

test("Test Employee", () => {
  const employee = new Employee('Newby', 24, 'newby@newco.com', 'Manager');

  expect(employee.name).toEqual(expect.any(String))
  expect(employee.id).toEqual(expect.any(Number))
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.role).toBe('Manager' || 'Engineer' || 'Intern');

  expect(employee.getName()).toEqual(expect.any(String))
  expect(employee.getId()).toEqual(expect.any(Number))
  expect(employee.getEmail()).toEqual(expect.any(String))
  expect(employee.getRole()).toBe('Manager' || 'Engineer' || 'Intern');

});
