// const jsonServer= require("json-server");
// const server= jsonServer.create();

// const router=jsonServer.router("db.json");
// const middleware=jsonServer.defaults();
// const port=process.env.port|| 3001;
// server.use(middleware);
// server.use(router);
// server.listen(port);

const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);