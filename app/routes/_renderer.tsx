import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";

// @ts-expect-error
export default jsxRenderer(({ children, frontmatter }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{frontmatter?.title}</title>
        <Script src="/app/client.ts" />
        <link rel="stylesheet" href="/app/style.css" />
        <link rel="icon" href="/static/favicon.png" />
      </head>
      <body class="bg-gray-100">
        <main class="w-[500px] max-w-full mx-auto">{children}</main>
      </body>
    </html>
  );
});
