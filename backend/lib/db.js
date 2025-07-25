import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config();

export const sql = neon(process.env.CONNECTION_STRING);

export const initDb = async () => {
  try {
    await sql`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
    `;

    await sql`
        CREATE TABLE IF NOT EXISTS users (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            email VARCHAR(255) UNIQUE NOT NULL,
            name VARCHAR(255) NOT NULL,
            password TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    console.log("DB initialized");
  } catch (error) {
    console.log("Error initDB", error);
  }
};
