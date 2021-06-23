const fs = require('fs');

const files = ['one.txt', 'two.txt', 'three.txt', 'four.txt'];
const asyncMappedFiles = [];

function iterate(index) {
    if (index === files.length) {
        return finish();
    }

    const file = files[index];
    fs.readFile(`./files/${file}`, 'utf8', (err, data) => {
        if (err) {
            return finish(err);
        }

        asyncMappedFiles[index] = `${file} - ${data}`;
        iterate(index + 1);
    })
}

function finish(err) {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(asyncMappedFiles);
}

iterate(0);