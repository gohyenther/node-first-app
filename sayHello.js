function say(name) {
  console.log('Hello ' + name + '!');
}

function execute() {
  console.log('Your first app is executed successfully');
}

// exports
module.exports.say = say;
module.exports.execute = execute;