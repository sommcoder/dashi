require("dotenv").config();

const fastify = require("fastify")({ logger: true });

const PORT = process.env.PORT || 5000;

fastify.register(require("./routes/items"), { prefix: "api/v1" });

fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
