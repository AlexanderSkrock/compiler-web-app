const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();
app.use(express.static(__dirname + '/dist/compiler-web-app'));
app.use('/api/', proxy('https://compiler-application-server.herokuapp.com/'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/compiler-web-app/index.html'));
});
app.listen(process.env.PORT || 8080);
