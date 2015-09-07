var restify = require('restify');
var httpServer = restify.createServer();
var staticFiles = require('node-static');
var Photo = require('./PhotoController');
var conf = require('./config.js');
var fileServer = new staticFiles.Server(conf.directory);

httpServer.use(restify.bodyParser());

httpServer.get('/photo', Photo.init);
httpServer.post('/photo/pick', Photo.pick);
httpServer.post('/photo/pass', Photo.pass);

httpServer.listen(conf.httpPort, function() {
    console.log('listening on port: ' + conf.httpPort);
});

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(conf.filesPort);
