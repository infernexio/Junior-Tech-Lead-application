import express from "express";
import http from "http";
import {dirname} from "path";
import { fileURLToPath } from "url";
import serveFavicon from "serve-favicon";

var app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const favicon = serveFavicon
var jtlapp = http.createServer({}, app);


app.use('/favicon.ico', express.static(__dirname + '/favicon.ico'));
app.use('/', express.static(__dirname + '/index.html'));
app.use(favicon(__dirname + '/res/favicon.ico'));
//app.use(express.favicon(__dirname + '/public/images/favicon.ico'));

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/res/architect.jpeg', function(req,res) {
  res.sendFile(__dirname + '/res/architect.jpeg');
});

app.get('/res/house5.jpeg', function(req,res){
  res.sendFile(__dirname + '/res/house5.jpeg');
});

app.get('/res/house2.jpeg', function(req, res){
  res.sendFile(__dirname + '/res/house2.jpeg');
});

app.get('/res/house3.jpeg', function(req, res){
  res.sendFile(__dirname + '/res/house3.jpeg');
});

app.get('/res/house4.jpeg', function(req, res){
  res.sendFile(__dirname  + '/res/house4.jpeg');
});

app.get('/res/map.jpeg', function(req, res){
  res.sendFile(__dirname + '/res/map.jpeg');
});

app.get('/res/favicon.ico', function(req, res){
  res.sendFile(__dirname + '/res/favicon.ico');
});

app.get('/robots.txt', function(req, res){
  res.sendFile(__dirname + '/res/robots.txt');
});

app.get('/sitemap.xml', function(req, res){
  res.sendFile(__dirname + '/res/sitemap.xml');
});

app.get('/doc-10260484.txt', function(req, res){
  res.sendFile(__dirname + '/res/doc-10260484.txt');
});

app.get('/database_tables.txt', function(req, res){
  res.sendFile(__dirname + '/res/database_tables.txt');
});

app.get('*', (request, response) =>{
    console.log(request.url);
    
});


jtlapp.listen(80);
