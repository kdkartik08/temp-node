//Path Module

const path = require("path");

//display my separator type
console.log(path.sep);

//appending paths
const myPath = path.join("/content", "subfolder", "text.txt");
console.log(myPath);

//printing basename of path
const base = path.basename(myPath);
console.log(base);

//getting absolute file path
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
