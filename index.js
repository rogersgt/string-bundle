#! /usr/bin/env node
const userArgs = process.argv.slice(2);
const fileToRead = './' + userArgs[0];
const stringFile = './' + userArgs[1];

const fs = require('fs');
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
      console.log(userArgs[0] + " written to " + userArgs[1]);
    }
  });
});
