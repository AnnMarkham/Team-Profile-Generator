const Employee = require('./Employee');
// create class that Extends Employee

// additional Properties
//'github'// GitHub username


class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email, role);
    this.github = github;
  }

  //additional Methods
  //getGithub()
  getGithub() {
    return this.github
  };

  //update Method
  //getRole() -- Return of 'Employee' is over-ridden to return 'Engineer'  

  getRole() {
    return this.role;
  };
}
module.exports = Engineer;