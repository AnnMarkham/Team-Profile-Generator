//Create Employee Class// NOTE-- This will be the parent to Manager, Engineer and Intern

//PROPERTIES:
//'name'
//'id'
//'email'

class Employee {

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  //METHODS
  //getName()
  getName() {
    return this.name;
  };

  //getId()
  getId() {
    return this.id;
  };
  //getEmail()
  getEmail() {
    return this.email
  };
  //getRole() --- Returns 'Employee'  -- Role = Manager, Engineer or Intern
  getRole() {
    return this.role;
  };

}
module.exports = Employee;