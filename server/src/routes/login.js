function loginRoutes(fastify, options, done) {
  fastify.get("/login", async function handler(req, res) {
    return { hello: "world" };
  });

  fastify.get("/login:id", async function handler(req, res) {
    return { hello: "world" };
  });

  done();
}

module.exports = loginRoutes;
