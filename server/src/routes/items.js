const db = require("../db/db-client.js");

module.exports = function itemRoutes(fastify, options, done) {
  fastify.post("/items", async (req, reply) => {
    const data = JSON.parse(req.body);
    // get a single item by id
    console.log("received a POST request on /items");
    console.log("data:", data);
    // const item = db.createItem(data);
    reply.code(200).send(data);
    // reply.send(item);
    // return `Item ${item.id} was added to Postgres`;

    // for a POST request, the item id is generated server-side.
    // for a GET request, the item id would be part of req.params.id
  });

  fastify.get("/items", async (req, reply) => {
    try {
      // get all items by account id
      console.log("received a GET request on /items");
      reply.code(200).send(db.readAllItems());
    } catch (err) {
      console.log("Fastify error:", err.message);
    }
  });
  done();
};
