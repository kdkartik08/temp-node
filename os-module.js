//OS Modules Intro

const os = require("os"); //or we can directly destructure too

//Info about current user
const user = os.userInfo();
console.log(user);

//System uptime
console.log(`System uptime is ${os.uptime()} seconds`);

//Other OS information from OS module

const myOS = {
  name: os.type(),
  totalMemory: os.totalmem(),
  availableMemory: os.freemem(),
  release: os.release(),
  operatingSystem: os.version(), //version of window
};

console.log(myOS);
