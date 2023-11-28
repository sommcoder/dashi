require("dotenv").config();

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

const PORT = process.env.PORT || 5000;
// something was constantly sending port 4000 POST requests...???

// fastify.register(require("./routes/login"), { prefix: "api/v1" });
fastify.register(require("./routes/items"), { prefix: "api/v1" });

// Run the server!
fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
