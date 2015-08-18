var restify = require('restify');
var server = restify.createServer();

var retreive = require('./utils/retreive');
var conf = require('./config.js');

server.use(restify.bodyParser());

exports.init = function(req, res, next) {
    retreive.directoryList(conf.directory).then(function(list) {
        res.send(retreive.display(list, 0));
        next();
    });

};

exports.pick = function (req, res, next) {
    retreive.directoryList(conf.directory).then(function(list) {
        res.send(retreive.pick(list, req.params.index));
        next();
    });
};

exports.pass = function (req, res, next) {
    retreive.directoryList(conf.directory).then(function(list) {
        res.send(retreive.pass(list, req.params.index));
        next();
    });
};

server.get('/photo', exports.init);
server.post('/photo/pick', exports.pick);
server.post('/photo/pass', exports.pass);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
