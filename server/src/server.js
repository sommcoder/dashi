require("dotenv").config();

const fastify = require("fastify")({ logger: true });
// const test = require("../src/db/db-client.js").testConnection;

const PORT = process.env.PORT;

// Registered Routes:
fastify.register(require("./routes/items"), { prefix: "api/v1" });
// fastify.register(require("./routes/inventory"), { prefix: "api/v1" });
// fastify.register(require("./routes/areas"), { prefix: "api/v1" });
// fastify.register(require("./routes/transfers"), { prefix: "api/v1" });
// fastify.register(require("./routes/sales"), { prefix: "api/v1" });
// fastify.register(require("./routes/setup"), { prefix: "api/v1" });
// fastify.register(require("./routes/reports"), { prefix: "api/v1" });

fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  } else {
    console.log(`Fastify server is listening on port ${PORT}`);
    // test();
  }
});
