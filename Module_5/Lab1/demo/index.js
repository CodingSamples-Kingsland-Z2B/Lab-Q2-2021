const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
const pubSub = require('./pubSub');
// const utils = require('./utils');
const util = require('util');
require('./init');

const port = 5000;
const readFileAsync = util.promisify(fs.readFile);

function requestHandler(req, res) {
    let reqUrl = url.parse(req.url);
    let params = querystring.parse(reqUrl.query);
    // const readStream = fs.createReadStream('./views/cats.html', {highWaterMark: 5, encoding: 'utf8'});

    switch (reqUrl.pathname) {
        case '/cats':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
        
            // readStream.on('data', (chunk) => res.write(chunk));
            // readStream.on('end', () => res.end());
            // readStream.pipe(res);

            // fs.readFile('./views/cats.html', 'utf8', (err, data) => {
            //     if (err) {
            //         return res.end();
            //     }

            //     res.write(data);
            //     res.end();
            // });

            readFileAsync('./views/cats.html', 'utf8')
                .then((data) => {
                    console.log(typeof data);
                    let view = data.replace('{{name}}', params.name || 'Guest');
                    // let view = addDataToTemplate('cats', {name: 'Navcho', age: 5})
                    res.write(view);
                    res.end();
                });

            
            pubSub.publish('cats', params.name);
            break;
        case '/dogs':
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.write('Hello Dogs!');
            res.end();
            break;
        default:
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end();
            break;
    }
}

const app = http.createServer(requestHandler);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));