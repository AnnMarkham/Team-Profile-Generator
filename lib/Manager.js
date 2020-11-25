const Employee = require('./Employee');
//create Class that EXTENDS Employee

//additional PROPERTY
//officeNumber
class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
    this.role = "Manager"
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