require('colors');

const {
  menu,
  pause,
  readLine,
  taskListDelete,
  confirm,
  taskListcomplete,
} = require('./helpers/inquirer');
const { saveDb, readDb } = require('./helpers/dbHandler');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async () => {
  let opt = '';
  const tasks = new Tasks();

  const tasksInFile = readDb();
  if (tasksInFile) {
    tasks.loadTasks(tasksInFile);
  }

  // await pause();
  do {
    //Shows the  and get the selected option
    opt = await menu();

    switch (opt) {
      case '1':
        //Get the input from console. info write by user
        const desc = await readLine('Description: ');
        tasks.createTaks(desc);
        break;
      case '2':
        // const arr = tasks.taskArray;
        tasks.listAllTask();

        break;
      case '3':
        tasks.listPendtingCompletedTask(true);
        break;
      case '4':
        tasks.listPendtingCompletedTask(false);

        break;
      case '5':
        const ids = await taskListcomplete(tasks.taskArray);
        tasks.completeTask(ids);
        // console.log({ ids });
        break;
      case '6':
        const id = await taskListDelete(tasks.taskArray);
        const ok = await confirm(
          `Are you sure you want to delete ${1 + 1} task?`
        );
        if (ok) {
          tasks.deleteTask(id);
        }
        // console.log(ok);
        break;
      case '0':
        break;
    }

    saveDb(tasks.taskArray);

    // let task = new Task('task 1');
    // let tasks = new Tasks();

    // tasks._tasksList[task.id] = task;

    // console.log('1', task);
    // console.log('2', tasks);

    console.log('\n');
    await pause();
  } while (opt !== '0');
};

main();
