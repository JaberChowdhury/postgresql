import { app } from "./app";
import { initDb } from "./db/init";

// Initialize database schemas
initDb().catch(console.error);

export default {
	port: 3000,
	fetch: app.fetch,
};
