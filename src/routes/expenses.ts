import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { expenseService } from '../services/expense.service'
import { createExpenseSchema } from '../schemas/expense.schema'

const app = new Hono()

// Get all expenses
app.get('/', async (c) => {
  const expenses = await expenseService.getAllExpenses()
  return c.json(expenses)
})

// Create a new expense with validation
app.post('/', zValidator('json', createExpenseSchema), async (c) => {
  const body = c.req.valid('json')
  const newExpense = await expenseService.createExpense(body)
  return c.json(newExpense, 201)
})

export default app
