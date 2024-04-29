import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const run = async () => {
    const client = new pg.Client({
        host: "172.19.0.3",
        port: 5432,
        user: "root",
        password: "password",
        database: "postgres",
    });

    await client.connect();

    const db = drizzle(client);

    await migrate(db, { migrationsFolder: "drizzle" });

    await client.end();
};

run();