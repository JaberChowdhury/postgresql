import { sql } from '../db/index'
import { initDb } from '../db/init'

export class SeedService {
  async runSeed() {
    // Drop existing tables to ensure a completely fresh schema
    await sql`DROP TABLE IF EXISTS students, expenses CASCADE;`

    // Recreate tables with the latest schema
    await initDb()

    // Insert dummy data
    await sql.begin(async sql => {
      // Insert 5 dummy students
      await sql`
        INSERT INTO students (name, roll) VALUES 
        ('John Doe', '101'),
        ('Jane Smith', '102'),
        ('Alice Johnson', '103'),
        ('Bob Brown', '104'),
        ('Charlie Davis', '105')
      `

      // Insert 5 dummy expenses
      await sql`
        INSERT INTO expenses (date, title, category, account, amount, currency, type, description) VALUES
        ('2026-06-01', 'Grocery Shopping', 'Food', 'Checking', 120.50, 'USD', 'Expense', 'Weekly groceries'),
        ('2026-06-02', 'Electric Bill', 'Utilities', 'Checking', 85.00, 'USD', 'Expense', 'May electricity'),
        ('2026-06-03', 'Monthly Salary', 'Income', 'Savings', 3000.00, 'USD', 'Income', 'TechCorp Salary'),
        ('2026-06-04', 'Internet', 'Utilities', 'Checking', 60.00, 'USD', 'Expense', 'Fiber internet'),
        ('2026-06-05', 'Dinner out', 'Food', 'Credit', 45.00, 'USD', 'Expense', 'Pizza with friends')
      `
    })
  }
}

export const seedService = new SeedService()
