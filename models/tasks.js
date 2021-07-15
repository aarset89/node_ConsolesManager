const Task = require('./task');

class Tasks {
  _tasksList = {};
  get taskArray() {
    const arr = [];

    Object.keys(this._tasksList).forEach((key) => {
      const task = this._tasksList[key];
      arr.push(task);
    });

    return arr;
  }

  constructor() {
    this._tasksList = {};
  }

  createTaks(desc = '') {
    const task = new Task(desc);

    this._tasksList[task.id] = task;
  }

  loadTasks(tasksFile = []) {
    tasksFile.forEach((task) => {
      this._tasksList[task.id] = task;
    });
  }

  listAllTask() {
    console.log();

    this.taskArray.forEach((task, i) => {
      const idx = `${i + 1}`.green;
      const { desc, dateCompleted } = task;
      const done = dateCompleted ? 'Done'.green : 'Pending'.red;
      console.log(`${idx}. ${desc} :: ${done}`);
    });
  }

  listPendtingCompletedTask(doneTasks = true) {
    let idx = 0;

    this.taskArray.forEach((task, i) => {
      //   const idx = `${i + 1}`.green;
      const { desc, dateCompleted } = task;
      const done = dateCompleted ? 'Done'.green : 'Pending'.red;
      if (doneTasks) {
        if (dateCompleted) {
          idx += 1;
          console.log(
            `${idx.toString().green}. ${desc} :: ${dateCompleted.green}`
          );
        }
      } else {
        if (!dateCompleted) {
          idx += 1;

          console.log(`${idx.toString().green}. ${desc} :: ${done}`);
        }
      }
    });
  }

  deleteTask(taskId = '') {
    console.log(taskId);
    if (taskId === '') {
      return `Select a valid task`;
    }
    if (this._tasksList[taskId]) {
      delete this._tasksList[taskId];
    }
  }

  completeTask(ids = []) {
    this.taskArray.forEach((task, i) => {
      const toggleTask = ids.some((v) => v === task.id);

      if (toggleTask) {
        this._tasksList[task.id].dateCompleted = new Date().toISOString();
      } else {
        this._tasksList[task.id].dateCompleted = null;
      }
    });
  }
}

module.exports = Tasks;

// if (dateCompleted && done) {

//     const { desc, dateCompleted } = task;
//     const done = dateCompleted ? 'Done'.green : 'Pending'.red;
//       idx = `${idx + 1}`.green;

//       console.log(`${idx}. ${desc} :: ${done}`);
//     }
//     if (!dateCompleted && !done) {
//       console.log('SAPO');
//     }
