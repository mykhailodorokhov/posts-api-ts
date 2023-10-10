import { FastifyInstance, RouteOptions } from "fastify";
import * as postsController from "../controllers/posts.controller";

export default function getPosts(fastify: FastifyInstance): RouteOptions {
  return {
    method: "GET",
    url: "/api/posts/:id",
    handler: async (request, reply) => {
      const params = request.params as { id: number };
      const posts = await postsController.getPost(params.id);
      reply.code(200).send(posts);
    },
  };
}
