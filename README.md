# Brainbox
UA CS-495

Project Website: https://nicmills4.github.io/Brainbox
Sample Code: https://gist.github.com/luciopaiva/e6f60bd6e156714f0c5505c2be8e06d8


########################################
Socket IO (Connecting to remote server): 
You will not be connecting to localhost when you deploy the application and the devices will be connecting to the server hostname or IP address.

The following code on your server will run socket.io on an IP address associated with the server on the specified port provided that the server is accessible on that IP address

var io = require('socket.io');
var server = http.createServer();
server.listen(port, ipAddress);
var socket = io.listen(server);
The following code should work fine on the client side

var socket = new io.Socket();
socket.connect('http://' + ipAddress + ':' + port);
Make sure you are able to connect to the IP address across the network from the client device for this to work.
########################################
