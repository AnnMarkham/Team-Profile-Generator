// create class that Extends Employee//addtional Property
//'school'
const Employee = require('./Employee');


class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email, role);
    this.school = school;
    this.role = "Intern";
  }

  //additional METHOD
  //getSchool
  getSchool() {
    return this.school;
  };

  //update METHOD
  //getRole() -- Return of 'Employee' is over-ridden to return 'Intern'
  getRole() {
    return this.role;
  };
}

module.exports = Intern