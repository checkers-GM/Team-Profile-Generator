const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");

// Prompt for user to enter Employee information

function runInquirer() {
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

// Function to take inquirer input a generator content
