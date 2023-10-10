import { FastifyInstance, RouteOptions } from "fastify";
import * as postsController from "../controllers/posts.controller";

const bodySchema = {
  type: "object",
  properties: {
    text: {
      type: "string",
    },
    hashtags: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
  required: ["text"],
};

export default function createPost(fastify: FastifyInstance): RouteOptions {
  return {
    method: "POST",
    url: "/api/posts",
    schema: {
      body: bodySchema,
    },
    handler: async (request, reply) => {
      const newPost = request.body as { text: string; hashtags?: string[] };
      const posts = await postsController.createPost(newPost);
      reply.code(201).send(posts);
    },
  };
}
