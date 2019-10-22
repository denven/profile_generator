const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//these codes are used to demonstrate callback hell/waterfall.
rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question(`What's an activity you like doing ? `, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question(`What do you listen to while doing that ? `, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)? `, (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.close();
      });
    });
  });
});

