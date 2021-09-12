//Asynchronous Approach depicting the callback hell >.<

const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) console.log(err);

  const first = result;
  console.log(first);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) console.log(err);
    const second = result;
    console.log(second);

    writeFile(
      "./content/output-async.txt",
      `The two files are: ${first} ${second}`,
      (err, result) => {
        if (err) console.log(err);
        else return;
      }
    );
  });
});
