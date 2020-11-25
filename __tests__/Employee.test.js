const Employee = require('../lib/Employee');

test("Test Employee", () => {
  const employee = new Employee("Newby", 24, "newby@newco.com");

  expect(employee.name).toBe("Newby")
  expect(employee.id).toEqual(expect.any(Number))
  expect(employee.email).toEqual(expect.stringContaining('@'));
});