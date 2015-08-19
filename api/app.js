var restify = require('restify');
var server = restify.createServer();
var Photo = require('./PhotoController');

server.use(restify.bodyParser());

server.get('/photo', Photo.init);
server.post('/photo/pick', Photo.pick);
server.post('/photo/pass', Photo.pass);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
