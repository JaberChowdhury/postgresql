import { sql } from "../db/index";
import { CreateExpenseDto } from "../schemas/expense.schema";

export class ExpenseRepository {
	async findAll() {
		return sql`SELECT * FROM expenses ORDER BY date DESC, id DESC`;
	}

	async create(data: CreateExpenseDto) {
		const result = await sql`
      INSERT INTO expenses (
        date, title, category, account, amount, currency, type, 
        transfer_amount, transfer_currency, to_account, receive_amount, receive_currency, 
        description, due_date
      )
      VALUES (
        ${data.date}, ${data.title}, ${data.category}, ${data.account}, ${data.amount}, ${data.currency}, ${data.type},
        ${data.transfer_amount || null}, ${data.transfer_currency || null}, ${data.to_account || null}, ${data.receive_amount || null}, ${data.receive_currency || null},
        ${data.description || null}, ${data.due_date || null}
      )
      RETURNING *
    `;
		return result[0];
	}
}

export const expenseRepo = new ExpenseRepository();
