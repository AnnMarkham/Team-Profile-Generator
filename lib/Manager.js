const Employee = require('./Employee');
//create Class that EXTENDS Employee


//additional PROPERTY
//officeNumber
class Manager extends Employee {
  constructor(name, id, email, role, other) {
    super(name, id, email, role, other);
    this.other = other;
  }

  //getOfficeNum()
  getOther() {
    return this.other;
  }

  //update METHOD
  //getRole() -- Return of 'Employee' is over-ridden to return 'Manager'
  getRole() {
    return this.role;
  };

}

module.exports = Manager;
