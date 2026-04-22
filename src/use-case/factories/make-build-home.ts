import { PrismaConstructionProgressRepository } from '@/repository/prisma/prisma-construction-progress.repository';
import { PrismaExpenseRepository } from '@/repository/prisma/prisma-expense.repository';
import { PrismaInstallmentsRepository } from '@/repository/prisma/prisma-installments.repository';
import { BuildHomeUseCase } from '../home';

export function makeBuildHomeUseCase() {
  const constructionRepo = new PrismaConstructionProgressRepository();
  const installmentRepo = new PrismaInstallmentsRepository();
  const expenseRepo = new PrismaExpenseRepository();

  const buildHomeUseCase = new BuildHomeUseCase(
    constructionRepo,
    installmentRepo,
    expenseRepo,
  );

  return buildHomeUseCase
}
