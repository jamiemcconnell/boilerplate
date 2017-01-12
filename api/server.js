'use strict';

const Hapi = require('hapi');
const immutable = require('immutable');

var dbList = immutable.List();

const port = 8000;
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: port,
  routes: {
    cors: true
  }
});

server.route({
  method: 'GET',
  path: '/list',
  handler: (req, reply) => {
    return reply({items: dbList.toArray() });
  }
});

server.route({
  method: 'POST',
  path: '/list',
  handler: (req, reply) => {
    dbList = dbList.push(req.payload.text);
    return reply(200);
  }
});

server.start(() => {
  console.log(`Server Started on port ${port}`);
});
