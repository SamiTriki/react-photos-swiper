var conf = require('../../api/config.js');

var api = {
    init(){
        var url = `http://10.0.1.194:{conf.httpPort}/photo`;
        return fetch(url).then((res) => res.json());
    },
    pick(idx){
        var url = `http://10.0.1.194:{conf.httpPort}/photo/pick`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                'Origin': ''
            },
            body: JSON.stringify({index: idx})
        }).then((res) => res.json());
    },
    pass(idx){
        var url = `http://10.0.1.194:{conf.httpPort}/photo/pass`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                'Origin': ''
            },
            body: JSON.stringify({index: idx})
        }).then((res) => res.json());    
    }
};

module.exports = api;
