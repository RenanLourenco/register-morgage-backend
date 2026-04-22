import type {
  ConstructionProgressRepository,
  ExpenseRepository,
  InstallmentsRepository,
} from '@/repository';

export class BuildHomeUseCase {
  constructor(
    private constructionProgressRepository: ConstructionProgressRepository,
    private installmentRepository: InstallmentsRepository,
    private expenseRepository: ExpenseRepository,
  ) {}

  async execute() {
    const [installmentsAmount, constructionProgressesAmount, expensesAmount] =
      await Promise.all([
        this.installmentRepository.fetchAllAmount(),
        this.constructionProgressRepository.fetchAllAmount(),
        this.expenseRepository.fetchAllAmount(),
      ]);

      return {
        installments: installmentsAmount,
        constructionProgress: constructionProgressesAmount,
        expenses: expensesAmount,
        total: installmentsAmount + constructionProgressesAmount + expensesAmount
      }
  }
}
