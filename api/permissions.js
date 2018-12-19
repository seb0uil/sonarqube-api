var Client = require('node-rest-client').Client;

let permission = function(api) {
    let create_template = function (name, description, projectKeyPattern) {
        return api.post('/api/permissions/create_template', {
                name: name,
                description: description,
                projectKeyPattern: projectKeyPattern
            });
    };
    exports.create_template = create_template;

    let update_template = function (id, name, description, projectKeyPattern) {
        return api.post('/api/permissions/update_template', {
                id: id,
                name: name,
                description: description,
                projectKeyPattern: projectKeyPattern
            }, resolve, reject);
    };
    exports.update_template = update_template;

    let delete_template = function (templateId) {
        return api.post('/api/permissions/delete_template', {
                templateId: templateId
            });
    };
    exports.delete_template = delete_template;

    let add_group_to_template = function(templateId, groupName, permission) {
        return api.post('/api/permissions/add_group_to_template', {
            templateId: templateId,
            groupName: groupName,
            permission: permission
        });
    };
    exports.add_group_to_template = add_group_to_template;

    let remove_group_from_template = function(templateId, groupName, permission) {
        return post('/api/permissions/remove_group_from_template', {
            templateId: templateId,
            groupName: groupName,
            permission: permission
        });
    };
    exports.remove_group_from_template = remove_group_from_template;

    let add_user_to_template = function(templateId, login, permission) {
        post('/api/permissions/add_user_to_template', {
            templateId: templateId,
            login: login,
            permission: permission
        });
    };
    exports.add_user_to_template = add_user_to_template;

    let remove_user_from_template = function(templateId, groupName, permission) {
        post('/api/permissions/remove_user_from_template', {
            templateId: templateId,
            groupName: groupName,
            permission: permission
        });
    };
    exports.remove_user_from_template = remove_user_from_template;

    exports.template_permission = {
        user: 'user',
        codeviewer: 'codeviewer',
        issueadmin: 'issueadmin',
        admin: 'admin',
        scan: 'scan'
    };

    return this;
};

exports.permission = permission;

