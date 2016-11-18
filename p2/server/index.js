var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require ("mongoose");

var form_router = require ('./form.js');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
console.log("[SUCCESS]" + "Parser for request loaded success ... ");

var db_url = "mongodb://localhost:27017/user";
mongoose.connect (db_url);
console.log("[SUCCESS]" + "MongoDB Connected success ... ");

app.use ("/form", form_router);
console.log("[SUCCESS]" + "Router Mounted success ... ");


app.listen(3000);
console.log ("Listening on 3000 ... ");
