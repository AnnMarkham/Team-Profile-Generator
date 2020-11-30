const Employee = require('./Employee');
// create class that Extends Employee

// additional Properties
//'github'// GitHub username


class Engineer extends Employee {
  constructor(name, id, email, role, other) {
    super(name, id, email, role);
    this.other = other;
  }

  //additional Methods
  //getGithub()
  getOther() {
    return this.other
  };

  //update Method
  //getRole() -- Return of 'Employee' is over-ridden to return 'Engineer'  

  getRole() {
    return this.role;
  };

}


module.exports = Engineer;