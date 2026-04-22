import { Expense } from "@/domain";
import type { ExpenseRepository } from "@/repository";

export interface CreateExponseUseCaseRequest {
    amount: number;
    name: string;
    date: string;
}

export class CreateExpenseUseCase {
    constructor(private expenseRepository: ExpenseRepository){}

    async execute({amount, name, date}: CreateExponseUseCaseRequest) {
        const expense = new Expense(new Date(date), amount, name)

        await this.expenseRepository.create(expense);

        return {
            expense
        }
    }
}