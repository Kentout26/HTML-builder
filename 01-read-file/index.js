const fs = require('fs');
const path = require('path');
let file_path = path.join(__dirname, 'text.txt');



fs.readFile(file_path, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});