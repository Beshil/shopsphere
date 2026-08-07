import "dotenv/config";
import { createApp } from "./app.js";
import { config } from "./config.js";
import { connectDatabase } from "./database.js";

await connectDatabase(config.mongoUri);
const server = createApp().listen(config.port, () => {
  console.log(`ShopSphere API listening on port ${config.port}`);
});

const shutdown = () => server.close(() => process.exit(0));
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
