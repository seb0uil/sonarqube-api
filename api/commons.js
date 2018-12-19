exports.common = function() {

    let parseResponse = function (response, data, resolve, reject) {
        if (response.statusCode === 200) {
            resolve(data);
        } else {
            reject(response.statusCode)
        }
    };

    exports.api = function (client, server) {
        this.client = client;
        this.server = server;
        exports.post = function (url, data) {
            return new Promise(function (resolve, reject) {
                /* validate & clean data */
                for (var property in data) {
                    if (typeof data[property] === 'undefined') {
                        data[property] = '';
                    } else if (typeof data[property] !== 'string') {
                        reject('property typeof ' + typeof data[property])
                    }
                    data[property] = data[property].trim();
                }

                let args = {
                    data: data,
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                };
                client.post(server.url + url, args, function (data, response) {
                    parseResponse(response, data, resolve, reject);
                });
            });
        };

        exports.get = function (url) {
            return new Promise(function (resolve, reject) {
                client.get(server.url + url, function (data, response) {
                    parseResponse(response, data, resolve, reject);
                });
            });
        };
        return this
    };

    return this;
};

