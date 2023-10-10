import * as postModel from "../models/posts.model";
import { PostBodyType } from "../routes/schemas/posts.schema";

export async function getPosts() {
  try {
    return await postModel.getPosts();
  } catch (error) {
    console.log(`Error: ${error}`);
    throw new Error("oh no");
  }
}

export async function getPost(id: number) {
  try {
    return await postModel.getPost(id);
  } catch (error) {
    throw new Error("oh no");
  }
}

export async function deletePost(id: number) {
  try {
    await postModel.deletePost(id);
  } catch (error) {
    throw new Error("oh no");
  }
}

export async function createPost(post: PostBodyType) {
  try {
    return await postModel.createPost(post);
  } catch (error) {
    console.log(`Error: ${error}`);
    throw new Error("oh no");
  }
}
