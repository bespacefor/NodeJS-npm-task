const express = require('express');
const request = require('request');
const app = express();

app.get('/', function (req, res) {
    const request = require('request');
    request('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html', function (error, response, body) {
        var html = `<div style="margin: 0 auto; width: 40%">`;
        var json = JSON.parse(body);
        html += json.map(function(string) {
            var color 
        })
        res.send(body);
    });
})

app.listen(3000)
