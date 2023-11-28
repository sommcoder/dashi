function itemRoutes(fastify, options, done) {
  fastify.get("/items", async function handler(req, res) {
    return { hello: "world" };
  });

  fastify.get("/item:id", async function handler(req, res) {
    return { hello: "world" };
  });

  done();
}

module.exports = itemRoutes;
