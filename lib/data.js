//Dependencies
const fs = require('fs');
const path = require('path');


const lib = {};

lib.baseDir = path.join(__dirname, '/../.data')

// Read file 

lib.read = (dir, file) => {
    return new Promise((res, rej) => {
        fs.readFile(lib.baseDir + dir + '/' + file, 'utf-8', (err, data) => {
            if (!err && data) {
                const obj = JSON.parse(data);
                res(obj)
            } else {
                rej(err)
            }
        })
    })
}

lib.list = (dir) => {
    return new Promise((res, rej) => {
        fs.readdir(lib.baseDir + dir + '/', (err, data) => {
            if (!err && data && data.length > 0) {
                res(data)
            } else {
                rej(err)
            }
        })
    })
}




// Export module
module.exports = lib;