const bodyParser = require("body-parser");
const express = require('express');
const app = express();

//extracting and encoding the request from the body
app.use(bodyParser.json({ verify: function (req, res, buf) {
     req.rawBody = buf 
    } }))

app.post('/webhooks', function (req, res) {
    const retrievedSignature = req.get("X-header-Integrity")
    const bodyString = Buffer.from(req.rawBody, 'utf8')
});