import { pgTable, integer, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    age: integer("age"),
});

export const books = pgTable("books", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    age: integer("age"),
});