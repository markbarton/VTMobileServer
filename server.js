'use strict';
var express = require( 'express' );

var port = process.env.PORT || 8787;
var app = express();
app.use(express.static('public'));

    app.listen( port );
