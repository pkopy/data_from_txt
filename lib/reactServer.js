const express = require('express')
const app = express();
const port = 6100;
const path = require('path');

const server = {}

app.use(express.static(path.join(__dirname, '/../radwag2/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/../radwag2/build', 'index.html'));
});

server.init = (() => {
    app.listen(port, () => console.log(`React listening on port ${port}!`))
});

module.exports = server;