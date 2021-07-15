const { v4: uuidv4 } = require('uuid');

class Task {
  id = '';
  desc = '';
  dateCompleted = null;

  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.dateCompleted = null;
  }
}

module.exports = Task;
