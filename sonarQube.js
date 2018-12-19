var Client = require('node-rest-client').Client;
var Common = require('./api/commons').common();
var permissions =require('./api/permissions');
var userGroup = require('./api/userGroups');
var userTokens = require('./api/userTokens');

let sonarQube = function(auth, server){
    this.auth = auth;
    this.server = server;
    let client = new Client(auth);

    let api_ = Common.api(client, server);

    let permission = permissions.permission(api_);
    exports.permission = permission;

    let user_group = userGroup.usergroups(api_);
    exports.user_group = user_group;

    let user_tokens = userTokens.usertokens(api_);
    exports.user_tokens = user_tokens;

    return this;
};

exports.sonarQube = sonarQube;


