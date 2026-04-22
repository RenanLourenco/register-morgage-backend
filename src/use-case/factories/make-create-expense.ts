import { PrismaExpenseRepository } from "@/repository/prisma/prisma-expense.repository";
import { CreateExpenseUseCase } from "../expenses";

export function makeCreateExpense() {
    const expenseRepo = new PrismaExpenseRepository()
    const createExpenseUseCase = new CreateExpenseUseCase(expenseRepo)
    return createExpenseUseCase
}