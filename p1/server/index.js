var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router = require ('./router.js');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", router);

app.use("/", (req, res) => {
    res.send ("TTTT Else!");
});

app.listen(3000);
console.log ("Listening on 3000 ... ");
