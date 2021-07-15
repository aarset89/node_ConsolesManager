const Fs = require('fs');

const path = './db/data.json';

const saveDb = (data) => {
  Fs.writeFileSync(path, JSON.stringify(data));
};

const readDb = () => {
  if (!Fs.existsSync(path)) {
    return null;
  }
  const data = Fs.readFileSync(path, { encoding: 'utf-8' });
  return JSON.parse(data);
};

module.exports = {
  saveDb,
  readDb,
};
