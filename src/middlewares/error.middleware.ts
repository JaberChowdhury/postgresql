import { ErrorHandler } from 'hono'
import { HTTPException } from 'hono/http-exception'

export const errorHandler: ErrorHandler = (err, c) => {
  console.error('[Error]:', err)

  if (err instanceof HTTPException) {
    return err.getResponse()
  }

  // Generic internal server error response
  return c.json(
    {
      error: {
        message: err.message || 'Internal Server Error',
      },
    },
    500
  )
}
