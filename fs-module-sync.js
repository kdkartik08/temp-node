//Synchronous File System Module (This module helps us read files and modify their contents)

const { readFileSync, writeFileSync, write } = require("fs");

//Reading from a file

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(
  `${first}
${second}`
);

//Creating a new file

writeFileSync(
  "./content/output.txt",
  `Content of both files are:
  ${first}
  ${second}`
);

//Appending a line to file
writeFileSync("./content/output.txt", `\nThis is appended line!`, {
  flag: "a",
});
