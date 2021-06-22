import fs from 'fs';
import { urlToFilename } from './utils.js';
import { download } from './spider.js';

export function sequentialSpider (url, nesting, cb) {
    const filename = urlToFilename(url);

    fs.readFile(filename, 'utf8', (err, fileContent) => {
        if (err) {
            if (err.code !== 'ENOENT') {
                return cb(err);
            }

            return download(url, filename, (err, requestContent) => {
                if (err) {
                    return err;
                }

                spiderLinks(url, requestContent, nesting, cb);
            });
        }

        spiderLinks(url, fileContent, nesting, cb);
    });
}

function spiderLinks (currentUrl, body, nesting, cb) {
    if (nesting === 0) {
        // Remember Zalgo? either completely async or not at all
        return process.nextTick(cb);
    }

    const links = getPageLinks(currentUrl, body);
    if (links.length === 0) {
        return process.nextTick(cb);
    }

    function iterate (index) {
        if (index === links.length) {
            return cb()
        }

        sequentialSpider(links[index], nesting - 1, function (err) {
            if (err) {
                return cb(err);
            }
            iterate(index + 1);
        });
    }

    iterate(0);
}