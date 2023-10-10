export const bodySchema = {
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

export interface postBodyType {
  text: string;
  hashtags?: string[];
}
