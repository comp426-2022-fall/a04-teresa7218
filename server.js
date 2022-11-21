#!/usr/bin/env node

import express from 'express';
import {roll} from './lib/roll.js';
import parseArgs from 'minimist';


var argv = parseArgs(process.argv);
const app = express();
const port = argv.port || 5000;
app.use(express.urlencoded({extended: true}));


app.get('/app', (req, res)=>{
	//res.setHeader('Content-Type', 'application/json');
	res.status(200).send("200 OK");
});

app.get('/app/roll', (req, res, next) => {
	let sides = 6;
	let dice = 2;
	let rolls = 1;

	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(roll(sides,dice,rolls));
});
app.post('/app/roll', (req, res, next) =>{
	let sides = parseInt(req.body.sides);
	let dice = parseInt(req.body.dice);
	let rolls = parseInt(req.body.rolls);
	
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(roll(sides,dice,rolls));
});

app.get('/app/roll/:sides', (req, res, next) => {
    let sides = parseInt(req.params.sides) || 6;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(sides, 2, 1));
});

app.get('/app/roll/:sides/:dice', (req, res, next) => {
    let sides = parseInt(req.params.sides) ||6;
    let dice = parseInt(req.params.dice) || 2;

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(sides, dice, 1));
});

app.get('/app/roll/:sides/:dice/:rolls', (req, res, next) => {
    let sides = parseInt(req.params.sides)||6;
    let dice = parseInt(req.params.dice) || 2;
    let rolls = parseInt(req.params.rolls) || 1;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(sides, dice, rolls));
});

// Default route
app.get("*", (req, res) => {
  
  res.status(404).send("404 NOT FOUND");
});

//setup server
app.listen(port);
