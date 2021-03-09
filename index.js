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
  for (i = 0; i < 1; i++) {
    const promise = new Promise((resolve, reject) => {
      runInquirerEmployee()
        .then(function ({ name, id, email, title }) {
          if (title === "Manager") {
            runInquirerManager().then(function (officeID) {
              this.employee = new Manager(name, id, email, officeID);
              employeeArray.push(employee);
              resolve("done");
              console.log(employeeArray);
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
        .catch(function (err) {
          console.log(err);
        });
    });
    const result = await promise;
    console.log(result);
  }

  let html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <div class="container">
        <div class="row">
          <div class="team col-12 justify-content-center">
            <div class="card employee-card">
              <div class="card-header">
                <h2 class="card-title">Bob</h2>
                <h3 class="card-title">Manager</h3>
              </div>
              <div class="card-body">
                <ul class="list-items">
                  <li class="list-group-item">ID: 1</li>
                  <li class="list-group-item">
                    Email: <a href="mailto:bob@office.com">bob@office.com</a>
                  </li>
                  <li class="list-group-item">Office Number: 5</li>
                </ul>
              </div>
            </div>
            <div class="card employee-card">
              <div class="card-header">
                <h2 class="card-title"></h2>
                <h2 class="card-title">Sam</h2>
                <h3 class="card-title">Engineer</h3>
              </div>
              <div class="card-body">
                <ul class="list-items">
                  <li class="list-group-item">ID: 1</li>
                  <li class="list-group-item">
                    Email: <a href="mailto:bob@office.com">Sam@office.com</a>
                  </li>
                  <li class="list-group-item">GitHub: 5</li>
                </ul>
              </div>
              <div class="card employee-card">
                  <div class="card-header">
                    <h2 class="card-title"></h2>
                    <h2 class="card-title">Fred</h2>
                    <h3 class="card-title">Intern</h3>
                  </div>
                  <div class="card-body">
                    <ul class="list-items">
                      <li class="list-group-item">ID: 1</li>
                      <li class="list-group-item">
                        Email: <a href="mailto:bob@office.com">Intern@office.com</a>
                      </li>
                      <li class="list-group-item">University of Toronto</li>
                    </ul>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
    `;
}

runApplication();

// Function to take inquirer input a generator content
