const inquirer = require('inquirer');
// require generatePage-  see module.exports in src/index.js
// const generatePage = require('./src/page-template.js');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// add inquirer prompts to enter:
//team manager's name, 
//employee id;
//email address
//office number
const teamMembers = [];

const getEmployee = async () => {
  while (true) {
    const Employee = await inquirer.prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Please select your role.',
        choices: ['Manager', 'Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'name',
        message: `Please Enter Name`,
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter employee email address'
      },
    ])

    if (Employee.role === "Manager") {
      await inquirer.prompt([
        {
          type: 'input',
          name: 'officeNum',
          message: 'What is your office number?'
        }
      ])
      teamMembers.push(Employee)
    }
    else if (Employee.role === "Engineer") {
      await inquirer.prompt([
        {
          type: 'input',
          name: 'github',
          message: 'Enter GitHub username?'
        }
      ])
      teamMembers.push(Employee)
    }
    else {
      await inquirer.prompt([
        {
          type: 'input',
          name: 'school',
          message: 'Enter Intern school name.'
        }
      ])
      teamMembers.push(Employee)
    }
    const { another } = await inquirer.prompt([
      {
        name: 'another',
        type: 'confirm',
        message: 'Add another employee?'
      }
    ])
    if (!another) {
      break;
    }
  }
}

getEmployee();

