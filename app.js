var modelManager = require('./Models/modelManager');
var express = require('express');
var app = express();

app.get('/getQuestions', function (req,res)
{
	var body = JSON.stringify(modelManager.getQuestions());
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Content-Length', body.length);
	res.end(body);
});

app.listen(3000);
console.log ('Deployed server and listening on port 3000');