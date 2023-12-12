const db = require("../db/db-client.js");

module.exports = function itemRoutes(fastify, options, done) {
  fastify.post("/items", async (req, reply) => {
    // get a single item by id
    const item = pg.createItem();
    reply.send(item);
    return `Item ${id} was added to Postgres`;
  });

  fastify.get("/items", async (req, reply) => {
    try {
      // get all items by account id
      console.log("received a request on /items");
      reply.code(200).send(db.readAllItems());
    } catch (err) {
      console.log("Fastify error:", err.message);
    }
  });
  done();
};
