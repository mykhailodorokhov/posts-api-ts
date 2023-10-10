import { Static, Type } from "@sinclair/typebox";

export const postBodySchema = Type.Object({
  text: Type.String(),
  hashtags: Type.Optional(Type.Array(Type.String())),
});

export type postBodyType = Static<typeof postBodySchema>;

// old way 💀

// export const postBodySchema = {
//   type: "object",
//   properties: {
//     text: {
//       type: "string",
//     },
//     hashtags: {
//       type: "array",
//       items: {
//         type: "string",
//       },
//     },
//   },
//   required: ["text"],
// };

// export interface postBodyType {
//   text: string;
//   hashtags?: string[];
// }
