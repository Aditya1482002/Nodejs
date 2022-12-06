const fs = require('fs');//in built module  './demofile.txt'

fs.readFile('C:\Users\User\Desktop\mevnAssignment\nodejs\NodeJS-main\nodeJS\nodeJS\Sample\demofile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});