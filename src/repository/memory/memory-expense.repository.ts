import type { Expense } from '@/domain';
import type { ExpenseRepository } from '../expense.repository';

export class MemoryExpenseRepository implements ExpenseRepository {
  public expenses: Expense[] = [];

  async create(expense: Expense): Promise<void> {
    this.expenses.push(expense);
  }

  async getById(id: string): Promise<Expense | null> {
    const e = this.expenses.find((el) => el.id === id);
    if (!e) {
      return null;
    }

    return e;
  }

  async fetchAllAmount(): Promise<number> {
    return this.expenses.reduce((a, b) => a + b.getAmount(), 0);
  }
}
