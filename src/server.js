let http = require('http');
let port = 3000
let app = require('./app.js')
server = http.createServer(app);

server.listen(port);
