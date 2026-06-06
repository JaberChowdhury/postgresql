import { expenseRepo } from "../repositories/expense.repo";
import { CreateExpenseDto } from "../schemas/expense.schema";

export class ExpenseService {
	async getAllExpenses() {
		return await expenseRepo.findAll();
	}

	async createExpense(data: CreateExpenseDto) {
		// Example business logic: Ensure dates are in the past, calc total fees, etc.
		return await expenseRepo.create(data);
	}
}

export const expenseService = new ExpenseService();
