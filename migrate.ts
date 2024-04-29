import 'dotenv/config';
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, client } from './db/db.mjs'

await migrate(db, { migrationsFolder: "drizzle" });
await client.end();