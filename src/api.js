import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
function subscribeToMessanger(cb) {
  socket.on('timer', message => cb(null, message));
  socket.emit('subscribeToMessanger', 5000);
}
export { subscribeToMessanger };