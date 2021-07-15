require('colors');

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log('==========================='.green);
    console.log('     Select an option'.green);
    console.log('===========================\n'.green);

    console.log(`${'1'.green}. Create task`);
    console.log(`${'2'.green}. Show tasks`);
    console.log(`${'3'.green}. Show completed tasks`);
    console.log(`${'4'.green}. Show pending tasks`);
    console.log(`${'5'.green}. Complete task`);
    console.log(`${'6'.green}. Delete task`);
    console.log(`${'0'.green}. Exit`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question('Select an option: ', (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question('\nPress ENTER to continue \n ', (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

module.exports = {
  showMenu,
  pausa,
};
