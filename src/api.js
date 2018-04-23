import openSocket from 'socket.io-client';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const  socket = openSocket('http://localhost:8000');
function subscribeToMessanger(cb) {
  //socket.on('timer', message => cb(null, message));
  //socket.emit('subscribeToMessanger', 5000);
}
function displayMessage(messageObj) {
    switch (messageObj.type) {
        case 'info':
            NotificationManager.info(messageObj.message,messageObj.title);
            break;
        case 'success':
            NotificationManager.success(messageObj.message,messageObj.title);
            break;
        case 'warning':
            NotificationManager.warning(messageObj.message,messageObj.title,2000);
            break;
        case 'error':
            NotificationManager.error(messageObj.message,messageObj.title,3000);
            break;
         default:
            NotificationManager.error(messageObj.message,messageObj.title,3000);
         break;         
        }
}
subscribeToMessanger((err, messageObj) => displayMessage(messageObj));    

export { subscribeToMessanger };