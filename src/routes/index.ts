import { FastifyInstance } from "fastify";

import deletePosts from "./delete-posts-id";
import getPosts from "./get-posts";
import getPostsId from "./get-posts-id";
import postPosts from "./post-posts";

export default async function (fastify: FastifyInstance) {
  fastify.route(getPosts(fastify));
  fastify.route(getPostsId(fastify));
  fastify.route(deletePosts(fastify));
  fastify.route(postPosts(fastify));
}
