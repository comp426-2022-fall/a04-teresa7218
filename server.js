const express = require('express');
const app = express();

var port = normalizePort (process.env.PORT || '5000');

app.get('/', (req, res)=>{
	res.send("404 NOT FOUND")
})
