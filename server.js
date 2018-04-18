const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribeToMessanger', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);

    setInterval(() => {
        let randNumber = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
        client.emit('timer', messages(randNumber));
    }, interval);
  });
});
function messages(type) {
        switch (type) {
            case 1:
                return {"type" : "info","title":"Kotak Mahindra Bank","message": "Kotak Mahindra Bank board hikes FII investment limit to 42%"}
            break;
            case 2:
                return {"type" : "success","title":"Stock Soared","message": "The firm's stock soared 91.35% in the past 5 years while it surged 41% in the last 12 months"}
            break;
            case 3:
                return {"type" : "warning","title":"Morgan Stanley","message": "Morgan Stanley says doubts over election result to hurt Indian stocks"}           
            break;
            case 4:
                return {"type" : "info","title":"HDFC Bank","message": "Pricey HDFC Bank is still an object of mutual funds' affection In March 2016, HDFC Bank was the biggest holding in 37 schemes."}
            break;
            case 5:
                return {"type" : "success","title":"Stock Market","message": "Indian stock markets have outperformed most of their global peers from March 23."}
            break;
            case 6:
                return {"type" : "warning","title":"Market Now","message": " HUL, VIP, Nestle among 25 stocks that scaled fresh 52-week highs"}           
            break;
            default :
                return {"type" : "error","title":"Market closing","message": "Markets closed on a lacklustre note; winning streak continued for 9th day in a row"}
            break;
        }
}
const port = 8000;
io.listen(port);
console.log('listening on port ', port);
