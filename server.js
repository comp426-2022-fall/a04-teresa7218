import {roll} from "../lib/roll.js"; 
const express = require('express');
const app = express();
const normalizePort = require('normalize-port');

var port = normalizePort (process.env.PORT || '5000');

app.get('/', (req, res)=>{
	res.send("404 NOT FOUND")
});

app.get('/app', (req, res)=>{
	res.send("200 OK")
});

app.get('/app/roll', (req, res) =>{


app.listen(5000, () => console.log('Listening on port 5000...'));
