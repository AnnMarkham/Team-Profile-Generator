const Employee = require('./Employee');
// create class that Extends Employee

// additional Properties
//'github'// GitHub username


class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
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