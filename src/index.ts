import Fastify, { FastifyInstance } from "fastify";
import routes from "./routes";

const fastify: FastifyInstance = Fastify();

fastify.register(routes);

// async function appInit(fastify: FastifyInstance) {
//   try {
//     await fastify.listen({ host: "127.0.0.1", port: 3000 });
//     console.log(`✅ Server is running`);
//   } catch (error) {
//     console.log(`🫡 Server is expiriencing L`);
//     console.log(`Reason: ${error}`);
//     process.exit(1);
//   }
// }

//appInit(fastify);

fastify
  .listen({ host: "127.0.0.1", port: 3000 })
  .then(() => {
    console.log(`✅ Server is running`);
  })
  .catch((error: Error) => {
    console.log(`🫡 Server is expiriencing L`);
    console.log(`Reason: ${error}`);
    process.exit(1);
  });
