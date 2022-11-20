import express from 'express';
import {roll} from './lib/roll.js';
const app = express();
const {SERVER_PORT: port = 5000} = process.env;
app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res, next)=>{
	res.status(200).send("200 OK");
	next();
});

app.get('/app/roll/', (req, res, next) =>{
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
	res.json({sides: sides, dice: dice, rolls: rolls, results: r});
});

// Default route
app.get("*", (req, res) => {
  
  res.status(404).send("404 NOT FOUND");
});

//setup server
app.listen(port, ()=> console.log(`listening on port ${port}!`));
