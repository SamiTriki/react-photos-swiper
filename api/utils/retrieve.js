var fs = require('fs');
var conf = require('../config');
var Promise = require('bluebird');
var path = require('path');

var currentIndex = 0;

exports.directoryList = function(dir) {
    return new Promise(function(resolve, reject){
        fs.readdir(dir, function(err, list) {
            if (err) reject(err);
            images = list.filter(function(item) {
                if (conf.extname.indexOf(path.extname(item)) !== -1) return item;
            });

            resolve({directory: dir, files: images, nbFiles: images.length});
        });
    });
};

exports.pick = function(list, idx) {
    var dir = list.directory;

    fs.rename(dir + '/' + list.files[idx], conf.picked_photos + list.files[idx], function(err) {
        if (err) console.log(err);
    });

    var nextImg = dir + '/' + list.files[idx + 1];

    return {url: nextImg, index: idx +1};
};

exports.pass = function(list, idx) {
    var dir = list.directory;
    var nextImg = dir + '/' + list.files[idx + 1];

    return {url: nextImg, index: idx +1};
};

exports.display = function(list, idx) {
    var path = list.directory + '/' + list.files[idx];
    return {url: path, index: idx};
};


