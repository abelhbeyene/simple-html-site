import pkg from "node-php-server";
import path from "path";
import { fileURLToPath } from "url";

const { createServer } = pkg;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const routerFolder = path.join(__dirname, "server.php");

createServer({
  port: 8000,
  hostname: "127.0.0.1",
  base: ".",
  keepalive: false,
  open: false,
  bin: "php",
  router: routerFolder,
});
