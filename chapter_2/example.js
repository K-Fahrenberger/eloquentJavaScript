const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Pick a number: ", (input) => {
  const theNumber = Number(input);
  if (!Number.isNaN(theNumber)) {
    console.log("The square of your number is " + theNumber * theNumber);
  } else {
    console.log("Hey. Why didn't you give me a number?");
  }
  rl.close();
});