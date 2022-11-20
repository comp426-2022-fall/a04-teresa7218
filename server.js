import express from 'express';
import {roll} from './lib/roll.js';
const app = express();
const {SERVER_PORT: port = 5000} = process.env;


app.get('/app/', (req, res)=>{
	return res.status(200).send("200 OK");
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/app/roll/', (req, res) =>{
	var sides = parseInt(req.body.sides)|| 6;
	var dice = parseInt(req.body.dice)|| 2 ;
	var rolls = parseInt(req.body.rolls)|| 1;
	var r = roll(sides,dice,rolls);
	res.json({sides: sides, dice: dice, rolls: rolls, results: r});
});

// Default route
app.get("*", (req, res) => {
  
  res.status(404).send("404 NOT FOUND");
});

//setup server
app.listen(port, ()=> console.log(`listening on port ${port}!`));
