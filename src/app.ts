import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'
import { prettyJSON } from 'hono/pretty-json'
import { errorHandler } from './middlewares/error.middleware'
import studentsRoutes from './routes/students'
import expensesRoutes from './routes/expenses'
import seedRoutes from './routes/seed'

export const app = new Hono()

// Global Middlewares
app.use('*', logger())
app.use('*', cors())
app.use('*', secureHeaders())
app.use('*', prettyJSON())

// Global error handler
app.onError(errorHandler)

app.get('/', (c) => {
  return c.text('Hello from Bun + Hono + PostgreSQL API!')
})

// Mount routers
app.route('/students', studentsRoutes)
app.route('/expenses', expensesRoutes)
app.route('/seed', seedRoutes)
