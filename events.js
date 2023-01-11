// events
const EventEmitter = require('events');
const emitter = new EventEmitter();

// register a listener to listen for an event called 'messageLogged' and taking in arguments
emitter.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

// register a listener to listen for an event called 'logging' and taking in arguments
emitter.on('logging', (arg) => {
    console.log('Listener called', arg);
  });


  // raise an event called 'messageLogged' along with 2 arguments {id, url}
emitter.emit('messageLogged', { id: 1, url: 'http://' });

// raise an evenet called logging along with 1 argument {data}
emitter.emit('logging', {data: 'user data'});