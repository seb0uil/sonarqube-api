const sonarQube = require("./sonarQube");

var auth = { user: "admin", password: "admin" };
var server = {url: "http://sonarQbue/"};

var client =  sonarQube.sonarQube(auth, server);
const perm = sonarQube.permission.template_permission;

// client.permission.create_template("sbe-api", "", "sbe-api.*").then(
//     (r) => {
//         console.log(r.permissionTemplate.id)
//     }/
// )

client.user_group.search_groups().then(
    (r) => {
        console.log(r.permissionTemplate.id)
    }
);