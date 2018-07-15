var fs = require('fs');

fs.unlink('writeFile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});