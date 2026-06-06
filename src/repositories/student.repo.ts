import { sql } from "../db/index";
import { CreateStudentDto, UpdateStudentDto } from "../schemas/student.schema";

export class StudentRepository {
	async findAll() {
		return sql`SELECT * FROM students ORDER BY id DESC`;
	}

	async findById(id: number) {
		const result = await sql`SELECT * FROM students WHERE id = ${id}`;
		return result[0];
	}

	async create(data: CreateStudentDto) {
		const result = await sql`
      INSERT INTO students (name, roll)
      VALUES (${data.name}, ${data.roll})
      RETURNING *
    `;
		return result[0];
	}

	async update(id: number, data: UpdateStudentDto) {
		// If no fields are provided, return the existing user or throw error
		if (Object.keys(data).length === 0) {
			return this.findById(id);
		}

		const result = await sql`
      UPDATE students 
      SET 
        name = COALESCE(${data.name ?? null}, name),
        roll = COALESCE(${data.roll ?? null}, roll)
      WHERE id = ${id}
      RETURNING *
    `;
		return result[0];
	}

	async delete(id: number) {
		const result = await sql`
      DELETE FROM students WHERE id = ${id} RETURNING *
    `;
		return result[0];
	}
}

export const studentRepo = new StudentRepository();
