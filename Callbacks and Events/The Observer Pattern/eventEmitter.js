import { EventEmitter } from 'events';
import { readFile } from 'fs';

function findRegex (files, regex) {
    const emitter = new EventEmitter();
    for (const file of files) {
        readFile(file, 'uf8', (err, content) => {
            if (err) {
                return emitter.emit('error', err);
            }

            emitter.emit('fileread', file);
            const match = content.match(regex);
            if (match) {
                match.forEach(element => emitter.emit('found', file, element));
            }
        });
    }
    return emitter;
}

findRegex(
    ['fileA.txt', 'fileB.json'],
    /hello \w+/g
)
    .on('fileread', file => console.log(`${file} was read`))
    .on('found', (file, match) => console.log(`Matched "${match}" in ${file}`))
    .on('error', err => console.error(`Error emitted ${err.message}`));