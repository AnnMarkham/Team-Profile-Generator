const Employee = require('./Employee');
//create Class that EXTENDS Employee

//additional PROPERTY
//officeNumber
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager"
  }
}



//update METHOD
//getRole() -- Return of 'Employee' is over-ridden to return 'Manager'

module.exports = Manager;