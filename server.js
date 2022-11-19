import {roll} from "../lib/roll.js"; 
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
	res.send("404 NOT FOUND")
});

app.get('/app', (req, res)=>{
	res.send("200 OK")
});

app.get('/app/roll', (req, res) ={
	var r = roll(6, 2, 1);
	const obj = {sides: sides, dice: dice, rolls: rolls, results: r};
	res.json(obj);
});
app.listen(port, () => console.log(`Listening on port ${port}...`));
