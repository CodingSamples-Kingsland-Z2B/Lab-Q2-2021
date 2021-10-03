const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./views/cats.html', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./write.txt');
const gzip = zlib.createGzip();

// readStream.on('data', (data) => {
//     console.log('new chunk');
//     writeStream.write(data)
// });

// readStream.on('end', () => {
//     console.log('reading ended');
//     writeStream.end();
// });

// writeStream.on('finish', () => {
//     console.log('finished writing');
// });

readStream.pipe(gzip).pipe(writeStream);

