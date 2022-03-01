const WebSocket = require('ws')

const serverAddress = 'wss://troubled-melted-scallion.glitch.me/';

const ws = new WebSocket(serverAddress, {
    headers: {
      "user-agent": "Mozilla"
    }
});

ws.on('open', function() {
  ws.send("Connection to server successful");
});

ws.on('message', function(msg) {
  console.log("MSG: " + msg);
});