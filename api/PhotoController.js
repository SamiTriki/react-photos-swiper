var restify = require('restify');
var server = restify.createServer();

var retrieve = require('./utils/retrieve');
var conf = require('./config.js');

server.use(restify.bodyParser());

exports.init = function(req, res, next) {
    retrieve.directoryList(conf.directory).then(function(list) {
        res.send(retrieve.display(list, 0));
        next();
    });

};

exports.pick = function (req, res, next) {
    retrieve.directoryList(conf.directory).then(function(list) {
        console.log('index', parseInt(req.params.index));
        res.send(retrieve.pick(list, parseInt(req.params.index)));
        next();
    });
};

exports.pass = function (req, res, next) {
    retrieve.directoryList(conf.directory).then(function(list) {
        res.send(retrieve.pass(list, parseInt(req.params.index)));
        next();
    });
};

server.get('/photo', exports.init);
server.post('/photo/pick', exports.pick);
server.post('/photo/pass', exports.pass);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
