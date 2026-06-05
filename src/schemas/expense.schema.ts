import { z } from 'zod'

// Regex for YYYY-MM-DD
const dateRegex = /^\d{4}-\d{2}-\d{2}$/

export const createExpenseSchema = z.object({
  date: z.string().regex(dateRegex, 'Date must be in YYYY-MM-DD format'),
  title: z.string().min(1, 'Title is required').max(255),
  category: z.string().min(1, 'Category is required').max(100),
  account: z.string().min(1, 'Account is required').max(100),
  amount: z.number().positive('Amount must be positive'),
  currency: z.string().min(1, 'Currency is required').max(10),
  type: z.string().min(1, 'Type is required').max(50),
  
  // Optional fields
  transfer_amount: z.number().positive().optional().nullable(),
  transfer_currency: z.string().max(10).optional().nullable(),
  to_account: z.string().max(100).optional().nullable(),
  receive_amount: z.number().positive().optional().nullable(),
  receive_currency: z.string().max(10).optional().nullable(),
  description: z.string().optional().nullable(),
  due_date: z.string().regex(dateRegex, 'Due Date must be in YYYY-MM-DD format').optional().nullable(),
})

export type CreateExpenseDto = z.infer<typeof createExpenseSchema>
