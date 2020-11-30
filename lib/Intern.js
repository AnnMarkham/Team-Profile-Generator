// create class that Extends Employee//addtional Property
//'school'
const Employee = require('./Employee');


class Intern extends Employee {
  constructor(name, id, email, role, other) {
    super(name, id, email, role);
    this.other = other;
  }

  //additional METHOD
  //getSchool
  getOther() {
    return this.other;
  };

  //update METHOD
  //getRole() -- Return of 'Employee' is over-ridden to return 'Intern'
  getRole() {
    return this.role;
  };
}

module.exports = Intern