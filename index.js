#! /usr/bin/env node
const userArgs = process.argv.slice(2);
const fs = require('fs');

const writeFiles = function(fileToRead,stringFile) {

  fileToRead = './' + fileToRead;
  stringFile = './' + stringFile;

  let newString = '';

  const lineReader = require('readline-promise').createInterface({
    input: fs.createReadStream(fileToRead)
  }).each(function(line) {
      newString += "'" + line + "' + \n";
  }).then(function(count) {
    newString = newString.slice(0, -3);
    let output = "module.exports=function(){" + "\n" + " return " + newString + ";" + "\n" + "};";
    fs.writeFile(stringFile, output, function(err,data) {
      if (err) {
        console.log(err);
      } else {
        console.log(fileToRead + " written to " + stringFile);
      }
    });
  });
};

// check for two arguments
if ((userArgs[0] && userArgs[1]) && (!userArgs[2])) {
  writeFiles(userArgs[0],userArgs[1]);
  // check for no arguments
} else if (!userArgs[0]) {
  fs.readFile('./string-bundle.json', function(err,data) {
    if (err) console.log(err);
    let config = JSON.parse(data);
    if (!config.modules) {
      console.log('ERR: no string-bundle modules specified');
    } else {
      config.modules.forEach(function(el) {
        writeFiles(el.input,el.output);
      });
    }
  });
}
