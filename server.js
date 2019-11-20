const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');

const app = express();
app.use(express.static(__dirname + '/dist/compiler-web-app'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/compiler-web-app/index.html'));
});
var apiProxy = proxy('/api/', {
    target: 'https://compiler-application-server.herokuapp.com/'
});
app.use(apiProxy);
app.listen(process.env.PORT || 8080);
