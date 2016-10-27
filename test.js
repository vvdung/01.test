/**
 * Created by vvdung on 10/27/2016.
 */
var express = require('express');
var app = express();

app.get('/',function(req,res){
   res.send('Hello World...');
});

app.listen(80,function(){
   console.log('Server listening at port 80.');
});