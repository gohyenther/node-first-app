// available memory
const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total Memory: ${totalMem}`);
console.log(`Used Memory: ${totalMem - freeMem}`);
console.log(`Free Memory: ${freeMem}`);