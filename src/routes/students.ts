import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { studentService } from '../services/student.service'
import { createStudentSchema, updateStudentSchema, studentIdSchema } from '../schemas/student.schema'

const app = new Hono()

// Get all students
app.get('/', async (c) => {
  const students = await studentService.getAllStudents()
  return c.json(students)
})

// Get a student by ID
app.get('/:id', zValidator('param', studentIdSchema), async (c) => {
  const { id } = c.req.valid('param')
  const student = await studentService.getStudentById(Number(id))
  return c.json(student)
})

// Create a new student
app.post('/', zValidator('json', createStudentSchema), async (c) => {
  const body = c.req.valid('json')
  const newStudent = await studentService.createStudent(body)
  return c.json(newStudent, 201)
})

// Update a student
app.put('/:id', zValidator('param', studentIdSchema), zValidator('json', updateStudentSchema), async (c) => {
  const { id } = c.req.valid('param')
  const body = c.req.valid('json')
  const updatedStudent = await studentService.updateStudent(Number(id), body)
  return c.json(updatedStudent)
})

// Delete a student
app.delete('/:id', zValidator('param', studentIdSchema), async (c) => {
  const { id } = c.req.valid('param')
  const deletedStudent = await studentService.deleteStudent(Number(id))
  return c.json(deletedStudent)
})

export default app
