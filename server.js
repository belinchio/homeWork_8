// server.mjs
import { createServer } from "node:http";
import { add, subtract } from "./math.js";

const server = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!\n");
});

console.log(`Сумма чисел 2 и 4 равна: ${add(2, 4)}`);
console.log(`Разница чисел 6 и 3 равна: ${subtract(6, 3)}`);

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
    console.log("Listening on 127.0.0.1:3000");
});

// run with `node server.mjs`
