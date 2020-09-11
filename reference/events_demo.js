const EventEmitter = require('events');

// Create Class
class MyEmmiter extends EventEmitter {}

// Init object
const myEmitter = new MyEmmiter();

// Event listener
myEmitter.on('event', () => console.log('event fired!'));

// Init Event
myEmitter.emit('event');
