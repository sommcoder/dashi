require("dotenv").config();

const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");
// const test = require("../src/db/db-client.js").testConnection;

const PORT = process.env.PORT;
const DOMAIN = process.env.DOMAIN;

fastify.register(cors, {
  "Access-Control-Allow-Origin": DOMAIN,
});

// enable multipart-form-data on server:
fastify.register(require("@fastify/multipart"));

// Registered Routes:
fastify.register(require("./routes/files"), { prefix: "api/v1" });

fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  } else {
    console.log(`Fastify server is listening on port ${PORT}`);
    // test();
  }
});
