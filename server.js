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

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/app/roll', (req, res) =>{
	var r = roll(6,2,1);
	res.json({sides: 6, dice: 2, rolls: 1, results: r});
});
app.listen({port}, () => console.log(`Listening on port ${port}...`));
