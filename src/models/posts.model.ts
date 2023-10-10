export interface Post {
  text: string;
  likes: number;
  hashtags: string[];
}

const posts = [
  {
    text: "Batman vs Superman is 10/10 movie - change my mind",
    likes: 2,
    hashtags: ["opinion", "movies"],
  },
  {
    text: "Tallinn is the new Miami",
    likes: 23,
    hashtags: ["opinion", "cities"],
  },
  {
    text: "Open Your Mind - guess the reference?",
    likes: 210,
    hashtags: ["movies"],
  },
];

export async function getPosts(): Promise<Post[]> {
  return structuredClone(posts);
}

export async function getPost(id: number): Promise<Post> {
  return structuredClone(posts[id]);
}

export async function createPost(post: postBodyType): Promise<Post> {
  const postHashtags = post.hashtags ?? [];
  const newPost: Post = {
    text: post.text,
    likes: 0,
    hashtags: postHashtags,
  };

  posts.push(newPost);
  return structuredClone(newPost);
}

export async function deletePost(id: number): Promise<void> {
  posts.splice(id, 1);
}
