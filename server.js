import express from 'express';
import {roll} from './lib/roll.js';
import parseArgs from 'minimist';
import request from 'request';

var argv = parseArgs(process.argv);
const app = express();
const port = argv.port || 5000;
app.use(express.urlencoded({extended: true}));


app.get('/app', (req, res, next)=>{
	request.setHeader('Content-Type', 'application/json');
	res.status(200).send("200 OK");
	next();
});

app.get('/app/roll', (req, res, next) => {
	var sides = 6;
	var dice = 2;
	var rolls = 1;
	res.type('application/json');
	var r = roll(sides,dice,rolls);
	request.setHeader('Content-Type', 'application/json');
	res.status(200).send(r);
	next();
});
app.post('/app/roll', (req, res, next) =>{
	var sides = 6;
	var dice = 2 ;
	var rolls = 1;
	if (req.body.sides) {
        	sides = parseInt(req.body.sides);
    	}
    	if (req.body.dice) {
        	dice = parseInt(req.body.dice);
    	}
    	if (req.body.rolls) {
        	rolls = parseInt(req.body.rolls);
	}
	var r = roll(sides,dice,rolls);
	request.setHeader('Content-Type', 'application/json');
	res.status(200).send(r);
});

// Default route
app.get("*", (req, res) => {
  
  res.status(404).send("404 NOT FOUND");
});

//setup server
app.listen(port, ()=> console.log(`listening on port ${port}!`));
