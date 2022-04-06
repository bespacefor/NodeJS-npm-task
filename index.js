const express = require('express');
const request = require('request');
const app = express();

app.get('/', function (req, res) {
    const request = require('request');
    request('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html', function (error, response, body) {
        res.send(body);
    });
})

app.listen(3000)
