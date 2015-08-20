var api = {
    init(){
        var url = `http://localhost:8080/photo`;
        return fetch(url).then((res) => res.json());
    },
    pick(idx){
        var url = `http://localhost:8080/photo/pick`;
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
        var url = `http://localhost:8080/photo/pass`;
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
