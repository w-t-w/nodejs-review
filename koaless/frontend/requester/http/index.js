const request = require('request');
const querystring = require('querystring');

let url = null;

const http = {
    compile: (config) => url = config.url,
    request: (data) => {
        return new Promise((resolve, reject) => {
            request(`${url}?${querystring.stringify(data)}`, (err, result) => {
                err ? reject(err) : resolve(result.body);
            });
        });
    }
};

module.exports = http;
