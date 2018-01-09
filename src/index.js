/**
 * Created by aliska on 05.01.2018.
 */
/*jslint node: true */
"use strict";
var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

var port = process.env.PORT || '8988';
app.set('port', port);

var server = http.createServer(app);
var io = require('socket.io')(server);
var msg_arr = [];
io.on('connection', function (socket) {
    socket.emit('msg', { msg: 'Hi! Notification array is empty!' });
    console.log('Hi! Notification array is empty!');
    socket.on('msg',function(msg){
        msg_arr = [];
        socket.emit('msg', { msg: "Notification : "+msg });
        msg_arr.push(msg);
        console.log('New notification :' + msg);
        console.log('Add notifications :' + msg_arr);
    });
});

server.listen(8988);