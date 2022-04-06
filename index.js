const express = require('express');
const request = require('request');
const randomColor = require('randomcolor');

const app = express();

app.get('/', function (req, res) {
    request('https://baconipsum.com/api/?type=meat-and-filler', function (error, response, body) {
        let html = `<div style="margin: 0 auto; width: 80%; font-size: 20px; font-weight: bold">`;
        let arr = JSON.parse(body);
        let words = arr.join(" ").split(' ');

        html += words.map(function(word) {
            let color = randomColor();
            return `<span style="color: ${color}">${word}</span>`;
        }).join(" ").toUpperCase();

        html += "</div>";
        res.send(html);
    });
})

app.listen(3000)
