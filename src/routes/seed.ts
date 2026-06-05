import { Hono } from 'hono'
import { seedService } from '../services/seed.service'

const app = new Hono()

// Reset DB and insert dummy entries
app.post('/', async (c) => {
  try {
    await seedService.runSeed()
    return c.json({ message: 'Database seeded successfully with 5 dummy entries for each table.' })
  } catch (err: any) {
    return c.json({ error: err.message }, 500)
  }
})

export default app
