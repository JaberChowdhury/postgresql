import { studentRepo } from '../repositories/student.repo'
import { CreateStudentDto, UpdateStudentDto } from '../schemas/student.schema'
import { HTTPException } from 'hono/http-exception'

export class StudentService {
  async getAllStudents() {
    return await studentRepo.findAll()
  }

  async getStudentById(id: number) {
    const student = await studentRepo.findById(id)
    if (!student) {
      throw new HTTPException(404, { message: 'Student not found' })
    }
    return student
  }

  async createStudent(data: CreateStudentDto) {
    return await studentRepo.create(data)
  }

  async updateStudent(id: number, data: UpdateStudentDto) {
    const student = await studentRepo.update(id, data)
    if (!student) {
      throw new HTTPException(404, { message: 'Student not found to update' })
    }
    return student
  }

  async deleteStudent(id: number) {
    const student = await studentRepo.delete(id)
    if (!student) {
      throw new HTTPException(404, { message: 'Student not found to delete' })
    }
    return student
  }
}

export const studentService = new StudentService()
