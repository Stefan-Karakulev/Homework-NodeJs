import EventEmitter from 'events';
import colors from "colors";

const trafficLight = new EventEmitter();

trafficLight.on('red', () => {
  console.log('RED'.red);
  setTimeout(() => trafficLight.emit('yellow'), 3000);
});

trafficLight.on('yellow', () => {
  console.log('YELLOW'.yellow);
  setTimeout(() => trafficLight.emit('green'), 3000);
});

trafficLight.on('green', () => {
  console.log('GREEN'.green);
  setTimeout(() => trafficLight.emit('red'), 3000);
});


trafficLight.emit('red');