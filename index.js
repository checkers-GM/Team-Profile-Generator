const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const { create } = require("domain");

let employeeArray = [];
let idArray = [];
// Prompt for user to enter Basic Employee information

function runInquirerManager() {
  inquirer.prompt = [
    {
      type: "input",
      message: "Please enter your managers name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "Please enter your managers ID?",
      name: "managerId",
    },
    {
      type: "input",
      message: "Please enter your managers email?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "Please enter your managers phone number?",
      name: "officeID",
    },
  ].then((answers) => {
    const managerData = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.officeID
    );
    employeeArray.push(managerData);
    idArray.push(managerId);
    runInquirerEmployee();
  });
}

function runInquirerEmployee() {
  inquirer.prompt = [
    {
      type: "list",
      message: "Please choose the team memeber you would like too add",
      choices: ["Engineer", "Intern", "I'm done."],
      name: "title",
    },
  ].then((answers) => {
    switch (answers.title) {
      case "Engineer":
        runInquirerEngineer();
        break;
      case "Intern":
        runInquirerIntern();
        break;
      default:
        createCard(employeeArray);
    }
  });
}

function runInquirerEngineer() {
  inquirer.prompt = [
    {
      type: "input",
      message: "Please enter your github",
      name: "github",
    },
  ].then((answers) => {
    const engineerData = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGithub
    );
    employeeArray.push(engineerData);
    idArray.push(engineerId);
  });
}

function runInquirerIntern() {
  inquirer.prompt = [
    {
      type: "input",
      message: "Please enter your school",
      name: "school",
    },
  ].then((answers) => {
    const internData = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    employeeArray.push(internData);
    idArray.push(internId);
  });
}

// async function runApplication() {
//   // Loop through employee array to create each object
//   let employeeArray = [];
//   for (i = 0; i < 1; i++) {
//     const promise = new Promise((resolve, reject) => {
//       runInquirerEmployee()
//         .then(function ({ name, id, email, title }) {
//           if (title === "Manager") {
//             runInquirerManager().then(function (officeID) {
//               this.employee = new Manager(name, id, email, officeID);
//               employeeArray.push(employee);
//               resolve("done");
//               console.log(employeeArray);
//             });
//           } else if (title === "Engineer") {
//             runInquirerEngineer().then(function ({ github }) {
//               this.employee = new Engineer(name, id, email, github);
//               employeeArray.push(employee);
//               resolve("done");
//             });
//           } else if (title === "Intern") {
//             runInquirerIntern().then(function ({ school }) {
//               this.employee = new Intern(name, id, email, school);
//               employeeArray.push(employee);
//               resolve("done");
//             });
//           }
//         })
//         .catch(function (err) {
//           console.log(err);
//         });
//     });
//     const result = await promise;
//     console.log(result);
//     createCard(employeeArray);
//   }

//   let html = `<!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Document</title>
//       <link
//         rel="stylesheet"
//         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
//         integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
//         crossorigin="anonymous"
//       />
//       <link rel="stylesheet" href="styles.css" />
//     </head>
//     <body>
//       <div class="container">
//         <div class="row">
//           <div class="team col-12 justify-content-center">
//             <div class="card employee-card">
//               <div class="card-header">
//               </div>
//               <div class="card-body">
//                 <ul class="list-items">
//                   <li class="list-group-item">ID: 1</li>
//                   <li class="list-group-item">
//                   </li>
//                   <li class="list-group-item">Office Number: 5</li>
//                 </ul>
//               </div>
//             </div>
//             <div class="card employee-card">
//               <div class="card-header">
//                 <h2 class="card-title"></h2>
//               </div>
//               <div class="card-body">
//                 <ul class="list-items">
//                   <li class="list-group-item">ID: 1</li>
//                   <li class="list-group-item">
//                   </li>
//                   <li class="list-group-item">GitHub: 5</li>
//                 </ul>
//               </div>
//               <div class="card employee-card">
//                   <div class="card-header">
//                     <h2 class="card-title"></h2>
//                   </div>
//                   <div class="card-body">
//                     <ul class="list-items">
//                       <li class="list-group-item">ID: 1</li>
//                       <li class="list-group-item">
//                       </li>
//                     </ul>
//                   </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </body>
//   </html>
//     `;
// }

// Function to take inquirer input and generator content

function createCard(Employee) {
  return new Promise(function (resolve, reject) {
    const name = Employee.getName();
    const role = Employee.getRole();
    const id = Employee.getId();
    const email = Employee.getEmail();
    let userHtml = "";
    if (role === "Manager") {
      const officeNumber = Employee.getOfficeNumber();
      userHtml = `<div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">Bob</h2>
        <h3 class="card-title">Manager</h3>
      </div>
      <div class="card-body">
        <ul class="list-items">
          <li class="list-group-item">ID:${id}</li>
          <li class="list-group-item">
            Email: <a href="${email}</a>
          </li>
          <li class="list-group-item">Office Number:${officeNumber}</li>
        </ul>
      </div>
    </div>`;
    } else if (role === "Intern") {
      const school = Employee.getSchool();
      userHtml = `div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">Bob</h2>
      <h3 class="card-title">Manager</h3>
    </div>
    <div class="card-body">
      <ul class="list-items">
        <li class="list-group-item">ID:${id}</li>
        <li class="list-group-item">
          Email: <a href="${email}</a>
        </li>
        <li class="list-group-item">Office Number:${school}</li>
      </ul>
    </div>
  </div>`;
    } else {
      const gitHub = Employee.getGithub();
      userHtml = `div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">Bob</h2>
        <h3 class="card-title">Manager</h3>
      </div>
      <div class="card-body">
        <ul class="list-items">
          <li class="list-group-item">ID:${id}</li>
          <li class="list-group-item">
            Email: <a href="${email}</a>
          </li>
          <li class="list-group-item">Github:${gitHub}</li>
        </ul>
      </div>
    </div>`;
    }
    console.log("Creating Cards");
    fs.appendFile("./output.html", userHtml, function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
}

runInquirerManager();
