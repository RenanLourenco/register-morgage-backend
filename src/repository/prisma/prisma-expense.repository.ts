import { Expense } from "@/domain";
import type { ExpenseRepository } from "../expense.repository";
import { prisma } from '@/lib/prisma/prisma';

export class PrismaExpenseRepository implements ExpenseRepository {
    async create(expense: Expense): Promise<void> {
        await prisma.expense.create({
            data: {
                date: expense.getFormattedDate(),
                name: expense.getName(),
                amount: expense.getAmount(),
            }
        })
    }
    async getById(id: string): Promise<Expense | null> {
        const row = await prisma.expense.findUnique({ where: { id } });

        if (!row) return null;
    
        return new Expense(row.date, row.amount, row.id);
    }
    async fetchAllAmount(): Promise<number> {
        const aggr = await prisma.expense.aggregate({
            _sum: {
              amount: true,
            },
          });
          return aggr._sum.amount ?? 0;
    }
    
}