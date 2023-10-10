import { FastifyInstance, RouteOptions } from "fastify";
import * as postsController from "../controllers/posts.controller";

export default function getPosts(fastify: FastifyInstance): RouteOptions {
  return {
    method: "DELETE",
    url: "/api/posts/:id",
    handler: async (request, reply) => {
      const params = request.params as { id: number };
      await postsController.deletePost(params.id);
      reply.code(200).send({ success: true });
    },
  };
}
