const fs = require('fs');

function readFileAsync(...params) {
    return new Promise((resolve, reject) => {
        fs.readFile(...params, (err, data) => {
            if (err) {
                return reject(err);
            }

            resolve(data);
        });
    });
}

module.exports = {
    readFileAsync,
}