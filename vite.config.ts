import ssg from "@hono/vite-ssg";
import { mdx } from "@natsuneko-laboratory/honox-mdx-island";
import honox from "honox/vite";
import client from "honox/vite/client";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["/app/style.css"],
          output: {
            assetFileNames: "static/assets/[name].[hash].[ext]",
          },
        },
      },
      plugins: [client()],
    };
  } else {
    return {
      build: {
        emptyOutDir: false,
      },
      plugins: [
        honox(),
        ssg({
          entry,
        }),
        mdx({
          jsxImportSource: "hono/jsx",
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        }),
      ],
    };
  }
});
