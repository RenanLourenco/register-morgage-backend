import { MemoryConstructionProgressRepository } from '@/repository/memory/memory-construction-progress.repository';
import { MemoryExpenseRepository } from '@/repository/memory/memory-expense.repository';
import { MemoryInstallmentsRepository } from '@/repository/memory/memory-installments.repository';
import { expect, test, describe, beforeAll } from 'bun:test';
import { BuildHomeUseCase } from './build-home';
import { ConstructionProgress, Expense, Installment } from '@/domain';
import { randomDate } from '@/utils/random-date';
import { randomAmount } from '@/utils/random-amount';
import { randomName } from '@/utils/random-name';

describe('build home use case', () => {
  let memoryInstallmentRepo: MemoryInstallmentsRepository;
  let memoryExpenseRepo: MemoryExpenseRepository;
  let memoryConstructionProgressRepo: MemoryConstructionProgressRepository;
  let buildHomeUseCase: BuildHomeUseCase;

  beforeAll(() => {
    memoryInstallmentRepo = new MemoryInstallmentsRepository();
    memoryExpenseRepo = new MemoryExpenseRepository();
    memoryConstructionProgressRepo = new MemoryConstructionProgressRepository();
    buildHomeUseCase = new BuildHomeUseCase(
      memoryConstructionProgressRepo,
      memoryInstallmentRepo,
      memoryExpenseRepo,
    );

    for (let index = 0; index <= 5; index++) {
      memoryInstallmentRepo.create(
        new Installment(randomDate(), randomAmount()),
      );
      memoryConstructionProgressRepo.create(
        new ConstructionProgress(randomDate(), randomAmount()),
      );
      memoryExpenseRepo.create(
        new Expense(randomDate(), randomAmount(), randomName()),
      );
    }
  });

  test('should build home', async () => {
    const { installments, constructionProgress, expenses, total } =
      await buildHomeUseCase.execute();

    expect(installments).toEqual(expect.any(Number))
    expect(constructionProgress).toEqual(expect.any(Number))
    expect(expenses).toEqual(expect.any(Number))
    expect(total).toEqual(installments + constructionProgress + expenses)
  });
});
