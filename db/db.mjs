import { drizzle } from "drizzle-orm/node-postgres";
import pg from 'pg';
// or
const client = new pg.Client({
  host: "172.19.0.2",
  port: 5432,
  user: "root",
  password: "root",
  database: "postgres",
});
await client.connect();

export const db = drizzle(client);