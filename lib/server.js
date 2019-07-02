const express = require('express');
const app = express();
const port = 6001;
const cors = require('cors');
const _data = require('./data');
const helpers = require('./helpers')

const server = {}
app.use(cors())

app.get('/data', (req, res) => {
    _data.list('/data')
        .then((data) => {
            return helpers.allRecords(data)

        })
        .then(data => res.send(data))
        .catch()
})

server.init = (() => {
    app.listen(port, () => console.log(`Data server listening on port ${port}!`))
})

module.exports = server;
