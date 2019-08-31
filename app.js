const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const ejs = require('ejs');

const restApi = require('./publicApiGetExaple');
const port = process.env.PORT||3000;


app.use(router);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

router.get('/',(err,res)=>{
	res.render("index",{ 
		a:restApi
	});
});

app.listen(port, err =>{
	
	if(err)
		console.log(err);
	else
		console.log('server is running...');
	
});