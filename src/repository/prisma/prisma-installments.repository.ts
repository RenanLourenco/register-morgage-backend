import { Installment } from '@/domain';
import type { InstallmentsRepository } from '../installments.repository';
import { prisma } from '@/lib/prisma/prisma';

export class PrismaInstallmentsRepository implements InstallmentsRepository {
  async create(installment: Installment): Promise<void> {
    await prisma.installment.create({
      data: {
        date: installment.getFormattedDate(),
        amount: installment.getAmount(),
        id: installment.id,
      },
    });
  }
  async getById(id: string): Promise<Installment | null> {
    const row = await prisma.installment.findUnique({ where: { id } });

    if (!row) return null;

    return new Installment(row.date, row.amount, row.id);
  }
  async fetchAllAmount(): Promise<number> {
    const aggr = await prisma.installment.aggregate({
      _sum: {
        amount: true,
      },
    });
    return aggr._sum.amount ?? 0;
  }
}
