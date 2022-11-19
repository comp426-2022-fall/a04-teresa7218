import {roll} from "../lib/roll.js"; 
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
	res.send("404 NOT FOUND")
});

app.get('/app', (req, res)=>{
	res.send("200 OK")
});

app.get('/app/roll', (req, res) =>{
	const sides = 6;
	const dice = 2;
	const rolls = 1;
	var r = roll(sides, dice, rolls);
});
app.listen(port, () => console.log('Listening on port 5000...'));
