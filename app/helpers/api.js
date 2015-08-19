var api = {
    init(){
        var url = `http://localhost:9999/photo}`;
        return fetch(url).then((res) => res.json());
    },
    pick(idx){
        var url = `http://localhost:9999/photo/pick}`;
        return fetch(url, {
            method: 'post',
            body: {index: idx}
        }).then((res) => res.json());
    },
    pass(idx){
        var url = `http://localhost:9999/photo/pass}`;
        return fetch(url, {
            method: 'post',
            body: {index: idx}
        }).then((res) => res.json());    
    }
};

module.exports = api;
