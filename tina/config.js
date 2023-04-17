import { defineConfig } from "tinacms";


export default defineConfig({
  branch: main,
  clientId: "b2e8e05a-3ce9-4af9-add5-027cdbde4932", // Get this from tina.io
  token: "8f2190f106db92dfbbd154da0d89d7ae81052886", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
