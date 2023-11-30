const readAllItems = require("../db/db-client.js");

module.exports = function itemRoutes(fastify, options, done) {
  //   fastify.get("/item:id", async (req, reply) => {
  //     // get a single item by id
  //     const item = pg.createItem();
  //     reply.send(item);
  //     return `Item ${id} was added to Postgres`;
  //   });

  fastify.get("/items", async (req, reply) => {
    // get all items by account id
    console.log("received a request");
    reply.code(200).send(readAllItems());
  });
  done();
};
