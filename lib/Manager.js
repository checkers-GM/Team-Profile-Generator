const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeID) {
    super(name, id, email);
    this.officedID = officeID;
  }

  getRole() {
    return "Manager";
  }
  getOfficeID() {
    return this.officedID;
  }
}
