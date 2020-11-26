const Employee = require('./Employee');
//create Class that EXTENDS Employee


//additional PROPERTY
//officeNumber
class Manager extends Employee {
  constructor(name, id, email, role, officeNum) {
    super(name, id, email, role);
    this.officeNum = officeNum;
  }

  //getOfficeNum()
  getOfficeNum() {
    return this.officeNum
  }

  //update METHOD
  //getRole() -- Return of 'Employee' is over-ridden to return 'Manager'
  getRole() {
    return this.role;
  };

}

module.exports = Manager;