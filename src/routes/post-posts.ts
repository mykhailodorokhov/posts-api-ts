import { FastifyInstance, RouteOptions } from "fastify";
import * as postsController from "../controllers/posts.controller";
import { PostBodySchema, PostBodyType } from "./schemas/posts.schema";

export default function createPost(fastify: FastifyInstance): RouteOptions {
  return {
    method: "POST",
    url: "/api/posts",
    schema: {
      body: PostBodySchema,
    },
    handler: async (request, reply) => {
      const newPost = request.body as PostBodyType;
      const posts = await postsController.createPost(newPost);
      reply.code(201).send(posts);
    },
  };
}
