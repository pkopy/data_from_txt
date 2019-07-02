const _data = require('./data')

const helpers = {};

helpers.allRecords = (dataOfFiles) => {
    return new Promise((res, rej) => {
        const arr = []
        for (let name of dataOfFiles) {
            _data.read('/data', name)
                .then(data => {
                    let table = [];
                    for (record of data) {
                        let helpArr = {
                            'TRANSLATION_CURRENT': record['TRANSLATION_CURRENT'],
                            'Value': record['Value'],
                            'Visible': record['Visible']
                        }

                        table.push(helpArr)
                    }

                    arr.push(table)

                    if (arr.length === dataOfFiles.length) {
                        res(arr)
                    }
                })
                .catch(err => rej(err))
        }
    })
}

module.exports = helpers