const express = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const api = '/api/v1';
// Serve static files....
server.use(express.static(__dirname + '/dist/ngrx-entity-crud-prime-ng-boilerplate'));

server.use(api, middlewares);
server.use(api, router);

server.get('**', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/ngrx-entity-crud-prime-ng-boilerplate/index.html'));
});

router.render = (req, res) => {
  res.jsonp({
    data: res.locals.data
  })
};

server.listen(process.env.PORT || 3000, (res) => {
  console.log('JSON Server is running on: http://localhost:3000');
});
