const inquirer = require('inquirer');
// require generatePage-  see module.exports in src/index.js
const generatePage = require('./src/page-template.js');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const { writeFile } = require('./utils/generate-site.js');


// add inquirer prompts to enter:
//team manager's name, 
//employee id;
//email address
//office number
const teamMembers = [];
let newMember = {};

const getEmployee = async () => {
  while (true) {
    let Employee = await inquirer.prompt([
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
      other = await inquirer.prompt([
        {
          type: 'input',
          name: 'other',
          message: 'What is your office number?'
        }
      ])
      console.log(other, typeof other, "other");
      console.log(Employee, typeof Employee, "Employee");

      newMember = {
        ...Employee,
        ...other
      }

    }
    else if (Employee.role === "Engineer") {
      other = await inquirer.prompt([
        {
          type: 'input',
          name: 'other',
          message: 'Enter GitHub username?'
        }
      ])
      newMember = {
        ...Employee,
        ...other
      }

    }
    else {
      other = await inquirer.prompt([
        {
          type: 'input',
          name: 'other',
          message: 'Enter Intern school name.'
        }
      ])
      newMember = {
        ...Employee,
        ...other
      }
    }

    teamMembers.push(newMember);

    const { another } = await inquirer.prompt([
      {
        name: 'another',
        type: 'confirm',
        message: 'Add another employee?'
      }
    ])

    if (!another) {

      let html = generatePage(teamMembers);

      writeFile(html)
      return teamMembers;
    }
  }

}

getEmployee().then(() => {
  console.log(teamMembers);
});
