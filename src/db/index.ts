import postgres from 'postgres'

// Connect to PostgreSQL (myfirstdb database)
export const sql = postgres({
  host: 'localhost',
  port: 5432,
  database: 'myfirstdb',
  user: process.env.USER || 'jaber',
})
