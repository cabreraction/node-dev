import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import mkdirp from 'mkdirp';
import { urlToFilename } from './utils.js';

export function spider (url, cb) {
    const filename = urlToFilename(url);
    fs.access(filename, err => {
        if (err && err.code === 'ENOENT') {
            console.log(`Downloading ${url} into ${filename}`);
            superagent.get(url).end((err, res) => {
                if (err) {
                    cb(err);
                } else {
                    mkdirp(path.dirname(filename), err => {
                        if(err) {
                            cb(err);
                        } else {
                            fs.writeFile(filename, res.text, err => {
                                if (err) {
                                    cb(err);
                                } else {
                                    cb(null, filename, true);
                                }
                            });
                        }
                    });
                }
            });
        } else {
            cb(null, filename, false);
        }
    })
}

export function earlyReturnSpider (url, cb) {
    const filename = urlToFilename(url);
    fs.access(filename, err => {
        if (err && err.code === 'ENOENT') {
            console.log(`Downloading ${url} into ${filename}`);
            superagent.get(url).end((err, res) => {
                if (err) {
                    return cb(err);
                }
                mkdirp(path.dirname(filename), err => {
                    if(err) {
                        return cb(err);
                    } 
                    fs.writeFile(filename, res.text, err => {
                        if (err) {
                            return cb(err);
                        } 
                        cb(null, filename, true);
                    });
                }); 
            });
            return;
        } 
        cb(null, filename, false);
    })
}

export function modularSpider (url, cb) {
    const filename = urlToFilename(url);
    fs.access(filename, err => {
        if (!err || err.code !== 'ENOENT') {
            return cb(null, filename, false);
        }
        download(url, filename, err => {
            if (err) {
                return cb(err);
            }
            cb(null, filename, true);
        });
    });
}

function saveFile (filename, contents, cb) {
    mkdirp(path.dirname(filename), err => {
        if(err) {
            return cb(err);
        } 
        fs.writeFile(filename, contents, cb);
    }); 
}

function download (url, filename, cb) {
    console.log(`Downloading ${url}`);
    superagent.get(url).end((err, res) => {
        if (err) {
            return cb(err);
        }
        saveFile(filename, res.text, err => {
            if (err) {
                return cb(err);
            }
            console.log(`Downloaded and saved: ${url}`);
            cb(nul, res.text);
        }) 
    });
}