import express from 'express';
import {roll} from './lib/roll.js';
const app = express();
const {SERVER_PORT: port = 5000} = process.env;

app.get('/', (req, res)=>{
	res.send("404 NOT FOUND")
});

app.get('/app', (req, res)=>{
	res.send("200 OK")
});

var r = roll(6,2,1);
var obj = {sides: 6, dice: 2, rolls:1, results: r};
const arstring = JSON.stringify(obj);

app.get('/app/roll', (req, res) =>{
	res.end(arstring);
});
app.listen({port}, () => console.log(`Listening on port ${port}...`));
