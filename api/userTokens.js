var Client = require('node-rest-client').Client;

let usertokens = function(api) {
    exports.search = function(login) {
        return api.get('/api/user_tokens/search' + ((login!== undefined)?'?login=' + login:''));
    };

    exports.generate = function(name, login) {
        return api.post('/api/user_tokens/generate', {
            name: name,
            login: login
        });
    };

    exports.revoke = function(name, login) {
        return api.post('/api/user_tokens/revoke', {
            name: name,
            login: login
        });
    };
    return this;
};
exports.usertokens = usertokens;


