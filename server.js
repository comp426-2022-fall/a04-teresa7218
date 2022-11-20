import express from 'express';
import {roll} from './lib/roll.js';
const app = express();
const {SERVER_PORT: port = 5000} = process.env;

app.get('/', (req, res)=>{
	res.send("404 NOT FOUND")
});

app.get('/app', (req, res)=>{
	res.send("200 OK");
	console.log("200 OK");
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/app/roll', (req, res) =>{
	var sides = 6 || req.body.sides;
	var dice = 2 || req.body.dice;
	var rolls = 1 || req.body.rolls
	var r = roll(sides,dice,rolls);
	res.json({sides: sides, dice: dice, rolls: rolls, results: r});
});
app.listen({port}, () => console.log(`Listening on port ${port}...`));
