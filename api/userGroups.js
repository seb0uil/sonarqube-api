var Client = require('node-rest-client').Client;

let usergroups = function(api) {
    let search_groups = function(query) {
        return api.get('/api/user_groups/search' + ((query!== undefined)?'?q=' + query:''));
    };
    exports.search_groups = search_groups;

    let create_user_groups = function(name, description) {
        return post('/api/user_groups/create', {
            name: name,
            description: description===undefined?"":description
        });
    };
    exports.create_user_groups = create_user_groups;

    return this;
};

exports.usergroups = usergroups;

