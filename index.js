const jsonServer = require('json-server');  //to import json server library
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;   //chosing port 

server.use(middlewares);
server.use(router);

server.listen(port);