var Client = require('node-rest-client').Client;
var Common = require('./commons');
var permissions =require('./permissions');
var userGroup = require('./userGroups');

let sonarQube = function(auth, server){
    this.auth = auth;
    this.server = server;
    let client = new Client(auth);

    let api_ = Common.common().api(client, server);

    let permission = permissions.permission(api_);
    exports.permission = permission;

    let user_group = userGroup.usergroups(api_);
    exports.user_group = user_group;

    return this;
};

exports.sonarQube = sonarQube;


