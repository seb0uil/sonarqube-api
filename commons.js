let Common = function() {

    let parseResponse = function (response, data, resolve, reject) {
        if (response.statusCode === 200) {
            resolve(data);
        } else {
            reject(response.statusCode)
        }
    };
    exports.parseResponse = parseResponse;

    let api = function (client, server) {
        this.client = client;
        this.server = server;
        let post = function (url, data) {
            return new Promise(function (resolve, reject) {
                let args = {
                    data: data,
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                };
                client.post(server.url + url, args, function (data, response) {
                    parseResponse(response, data, resolve, reject);
                });
            });
        };
        exports.post = post;

        let get = function (url) {
            return new Promise(function (resolve, reject) {
                client.get(server.url + url, function (data, response) {
                    parseResponse(response, data, resolve, reject);
                });
            });
        };
        exports.get = get;
        return this
    };
    exports.api = api;

    return this;
};

exports.parseResponse = Common.parseResponse;
exports.common = Common;
exports.api = Common.api;
