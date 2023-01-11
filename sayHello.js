function say(name) {
  console.log('Hello ' + name + '!');
}

function execute() {
  console.log('Your first app is executed successfully');
}

// available memory
const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();
console.log(`Total Memory: ${totalMem}`);
console.log(`Used Memory: ${totalMem - freeMem}`);
console.log(`Free Memory: ${freeMem}`);

// exports
module.exports.say = say;
module.exports.execute = execute;