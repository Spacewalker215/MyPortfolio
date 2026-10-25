import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT || 3000);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};

try {
  await stat(resolve(root, "index.html"));
} catch {
  console.error("No production build found. Run npm run build first.");
  process.exit(1);
}

createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  let path;
  try {
    path = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400).end("Invalid URL");
    return;
  }
  if (basePath) {
    if (path === basePath) {
      response.writeHead(308, { Location: `${basePath}/` }).end();
      return;
    }
    if (!path.startsWith(`${basePath}/`)) {
      response.writeHead(404).end("Page not found");
      return;
    }
    path = path.slice(basePath.length);
  }
  let file = resolve(root, `.${path}`);
  if (file !== root && !file.startsWith(root + sep)) {
    response.writeHead(403).end("Forbidden");
    return;
  }
  let status = 200;
  try {
    const info = await stat(file);
    if (info.isDirectory()) file = resolve(file, "index.html");
    await stat(file);
  } catch {
    file = resolve(root, "404.html");
    status = 404;
  }
  const stream = createReadStream(file);
  stream.on("error", () => {
    if (!response.headersSent) response.writeHead(500);
    response.end("Could not read the requested file.");
  });
  response.writeHead(status, {
    "Content-Type": types[extname(file)] || "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": path.startsWith("/_next/static/") ? "public, max-age=31536000, immutable" : "no-cache",
  });
  if (request.method === "HEAD") {
    stream.destroy();
    response.end();
  } else {
    stream.pipe(response);
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Portfolio preview: http://127.0.0.1:${port}${basePath}/`);
});
