const server = require("./server");

server.then((hapi) => {
  console.log(`because i'm Hapi, bitch! `);
  hapi.start();
});
