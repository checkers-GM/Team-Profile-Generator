//class for base employee
class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.name = name;
    this.title = "Employee";
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.title;
  }
}
module.exports = Employee;
