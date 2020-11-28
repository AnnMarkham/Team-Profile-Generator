//Create Employee Class// NOTE-- This will be the parent to Manager, Engineer and Intern

//PROPERTIES:
//'name'
//'id'
//'email'

class Employee {

  constructor(name, id, email, role, other) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.other = other;
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
  getother() {
    return this.other;
  }

}
module.exports = Employee;