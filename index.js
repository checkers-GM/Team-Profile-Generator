const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let employeeArray = [];

// Prompt for user to enter Basic Employee information

function runInquirerEmployee() {
  const inquirerPromps = [
    {
      type: "input",
      message: "Please enter your name",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter your employee ID",
      name: "id",
    },
    {
      type: "list",
      message: "Please select your title",
      choices: ["Manager", "Engineer", "Intern"],
      name: "title",
    },
  ];
  return inquirer.prompt(inquirerPromps);
}

// Inquirer Prompts for Manager

function runInquirerManager() {
  const promptArray = [
    {
      type: "input",
      message: "Please enter your office number?",
      name: "officeID",
    },
  ];
  return inquirer.prompt(promptArray);
}

function runInquirerEngineer() {
  const promptArray = [
    {
      type: "input",
      message: "Please enter your github",
      name: "github",
    },
  ];
  return inquirer.prompt(promptArray);
}

function runInquirerIntern() {
  const promptArray = [
    {
      type: "input",
      message: "Please enter your school",
      name: "school",
    },
  ];
  return inquirer.prompt(promptArray);
}

async function runApplication() {
  // Loop through employee array to create each object
  let employeeArray = [];
  for (i = 0; i < 4; i++) {
    const promise = new Promise((resolve, reject) => {
      runInquirerEmployee()
        .then(function ({ name, id, email, title }) {
          if (title === "Manager") {
            runInquirerManager().then(function (officeID) {
              this.employee = new Manager(name, id, email, officeID);
              employeeArray.push(employee);
              resolve("done");
            });
          } else if (title === "Engineer") {
            runInquirerEngineer().then(function ({ github }) {
              this.employee = new Engineer(name, id, email, github);
              employeeArray.push(employee);
              resolve("done");
            });
          } else if (title === "Intern") {
            runInquirerIntern().then(function ({ school }) {
              this.employee = new Intern(name, id, email, school);
              employeeArray.push(employee);
              resolve("done");
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    const result = await promise;
    console.log(result);
  }
}

runApplication();

// Function to take inquirer input a generator content
