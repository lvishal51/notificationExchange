const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribeToMessanger', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);

    setInterval(() => {
        let randNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        client.emit('timer', messages(randNumber));
    }, interval);
  });
});
function messages(type) {
        switch (type) {
            case 1:
                return {"type" : "info","message": "Kotak Mahindra Bank board hikes FII investment limit to 42%"}
            break;
            case 2:
                return {"type" : "success","message": "The firm's stock soared 91.35% in the past 5 years while it surged 41% in the last 12 months"}
            break;
            case 3:
                return {"type" : "warning","message": "Morgan Stanley says doubts over election result to hurt Indian stocks"}           
            default :
                return {"type" : "warning","message": "Markets closed on a lacklustre note; winning streak continued for 9th day in a row"}
            break;
        }
}
const port = 8000;
io.listen(port);
console.log('listening on port ', port);
