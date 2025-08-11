const fs = require('fs');



fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File has been written');
});


fs.appendFile('example.txt', '\n This is an appended line.', (err) => {
  if (err) throw err;
  console.log('File has been appended');
});
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File has been deleted');
});