import { Client } from "pg";

const globalForPg = global as unknown as { client: Client };

export const client =
  globalForPg.client ||
  new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "506063",
    database: "postgres",
  });

if (!globalForPg.client) {
  client.connect();
  globalForPg.client = client;
}
export default client;
