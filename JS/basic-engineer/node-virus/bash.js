/*
const fs = require("fs");
function testAppendFile() {
  const fileData = "\nHello world testing file\n";
  const callback = (error) => {
    if (error) {
      console.log(`creating file failed`);
      console.log(error);
    }
  };
  fs.appendFile("testFile.txt", fileData, callback);
}
testAppendFile();
*/
const fs = require("fs");
function createAndWriteFile() {
  let fileData = "";
  const fileName = `${new Date().toISOString()}.txt`;
  const callback = (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File created successfully!");
    }
  };
  for (let i = 0; i < 10000; i++) {
    fileData = fileData + `\ngot you ${i}\n`;
  }

  fs.writeFile(fileName, fileData, callback);
}

function main() {
  for (let i = 0; i < 5; i++) {
    createAndWriteFile();
  }
}
main();
