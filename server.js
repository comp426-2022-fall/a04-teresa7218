import express from 'express';
import {roll} from './lib/roll.js';
import parseArgs from 'minimist';

var argv = parseArgs(process.argv);
const app = express();
const {SERVER_PORT: port = 5000} = process.env;
app.use(express.urlencoded({extended: true}));

app.get('/app', (req, res, next)=>{
	res.status(200).send("200 OK");
	next();
});
app.get('/app/roll', (req, res, next) => {
	var sides = 6;
	var dice = 2;
	var rolls = 1;
	res.type('application/json');
	var r = roll(sides,dice,rolls);
	res.status(200).send(r);
});
app.put('/app/roll', (req, res, next) =>{
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
	res.type('application/json');
	var r = roll(sides,dice,rolls);
	res.status(200).send(r);
});

// Default route
app.get("*", (req, res) => {
  
  res.status(404).send("404 NOT FOUND");
});

//setup server
app.listen(port, ()=> console.log(`listening on port ${port}!`));
