[![npm version](https://badge.fury.io/js/sonarqube-api.svg)](https://badge.fury.io/js/sonarqube-api) [![Dependency Status](https://david-dm.org/seb0uil/sonarqube-api.svg)](https://david-dm.org/seb0uil/sonarqube-api) [![npm](https://img.shields.io/npm/dm/sonarqube-api.svg?maxAge=2592000)](https://www.npmjs.com/package/sonarqube-api)

# sonarQube API  

For the moment, just the really first version..  
But you could already manage right and template :) 

Create the API client
```javascript
const sonarQube = require("./sonarQube");

var auth = { user: "admin", password: "admin" };
var server = {url: "http://sonarQbue/"};

var client =  sonarQube.sonarQube(auth, server);
```   

Then play with it :)
```
client.user_group.search_groups().then(
    (r) => {console.log(r)}
);
```