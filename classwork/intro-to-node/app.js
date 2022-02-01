// console.log("Getting started with Node.js");

const fs = require("fs");
const content = "You are awesome!";

const prompt = require("prompt");
prompt.start();

prompt.get(['filename'], function (err, result) {
  
  if (fs.existsSync(result.filename)) {
    console.log("Please give a new filename. That already exist!");

  } else {
    console.log('File-Name: ' + result.filename);
    fs.writeFileSync(result.filename, content);
    console.log("File written successfuly");
  }
});

