import { ConstructionProgress } from '@/domain';
import { prisma } from '@/lib/prisma/prisma';
import type { ConstructionProgressRepository } from '../construction-progress.repository';

export class PrismaConstructionProgressRepository implements ConstructionProgressRepository {
  async create(construction: ConstructionProgress): Promise<void> {
    await prisma.constructionProgress.create({
      data: {
        date: construction.getFormattedDate(),
        amount: construction.getAmount(),
        id: construction.id,
      },
    });
  }
  async getById(id: string): Promise<ConstructionProgress | null> {
    const row = await prisma.constructionProgress.findUnique({ where: { id } });

    if (!row) return null;

    return new ConstructionProgress(row.date, row.amount, row.id);
  }
  async fetchAllAmount(): Promise<number> {
    const aggr = await prisma.constructionProgress.aggregate({
        _sum: {
            amount: true
        }
    })

    return aggr._sum.amount ?? 0;
  }
}
