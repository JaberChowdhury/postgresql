import { sql } from "./index";

export async function initDb() {
	// Ensure students table exists
	await sql`
    CREATE TABLE IF NOT EXISTS students (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      roll VARCHAR(10) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

	// Ensure expenses table exists
	await sql`
    CREATE TABLE IF NOT EXISTS expenses (
      id SERIAL PRIMARY KEY,
      date DATE NOT NULL,
      title VARCHAR(255) NOT NULL,
      category VARCHAR(100) NOT NULL,
      account VARCHAR(100) NOT NULL,
      amount NUMERIC(12, 2) NOT NULL,
      currency VARCHAR(10) NOT NULL,
      type VARCHAR(50) NOT NULL,
      transfer_amount NUMERIC(12, 2),
      transfer_currency VARCHAR(10),
      to_account VARCHAR(100),
      receive_amount NUMERIC(12, 2),
      receive_currency VARCHAR(10),
      description TEXT,
      due_date DATE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

	console.log("Database initialized successfully");
}
