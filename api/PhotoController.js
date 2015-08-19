var retrieve = require('./utils/retrieve');
var conf = require('./config.js');

exports.init = function(req, res, next) {
    retrieve.directoryList(conf.directory).then(function(list) {
        res.send(retrieve.display(list, 0));
        next();
    });

};

exports.pick = function (req, res, next) {
    retrieve.directoryList(conf.directory).then(function(list) {
        var index = (req.params.index >= list.nbFiles - 1) ? -1 : parseInt(req.params.index);
        res.send(retrieve.pick(list, index)); // copies current and returns next image in queue
        next();
    });
};

exports.pass = function (req, res, next) {
    retrieve.directoryList(conf.directory).then(function(list) {
        var index = (req.params.index >= list.nbFiles - 1) ? -1 : parseInt(req.params.index);
        res.send(retrieve.pass(list, index)); // returns next image in queue
        next();
    });
};
