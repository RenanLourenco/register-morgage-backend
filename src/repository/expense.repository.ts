import type { Expense } from "@/domain";

export interface ExpenseRepository {
    create(expense: Expense): Promise<void>;
    getById(id: string): Promise<Expense | null>
    fetchAllAmount(): Promise<number>
}