const fs = require('fs');

fs.mkdir('./files', (err) => {
    if (err) {
        console.log(err);
        return;
    }
});

fs.readdir('.', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.writeFile('./file-list.txt', data.join(', '), (err) => {
        if (err) {
            console.error(err);
        }
    })
});
