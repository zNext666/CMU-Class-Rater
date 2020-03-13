const db = require('./models/index')
const express = require('express')
const bodyParser = require('body-parser');
const server = express()
const cors = require('cors')
//const PORT = 8000
const routes = require('./routes/router')
const fs = require('fs');
const https = require('https');
const http = require('http');

// Certificate
const privateKey = fs.readFileSync('/etc/ssl/private/nginx-selfsigned.key', 'utf8');
const certificate = fs.readFileSync('/etc/ssl/certs/nginx-selfsigned.crt', 'utf8');
const credentials = {
	key: privateKey,
	cert: certificate,
};
// support parsing of application/json type post data
server.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors())


// console log all req
const logRequestStart = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`)
  console.log(`remoteAddress => ${req.connection.remoteAddress}`)
  next()
}
server.use(logRequestStart)
server.use('',routes)
//server.listen(PORT,() => console.log(`CMU class rater server running on PORT ${PORT}!`))
const httpServer = http.createServer(server);
const httpsServer = https.createServer(credentials, server);
httpServer.listen(8000, () => {
        console.log(`HTTP Server running on port 8000`);
});
httpsServer.listen(8443, () => {
	console.log(`HTTPS Server running on port 8443`);
});
