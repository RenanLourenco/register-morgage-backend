import { ConstructionProgress } from '@/domain/construction-progress';
import type { ConstructionProgressRepository } from '@/repository/construction-progress.repository';

export interface CreateConstructionProgressUseCaseRequest {
  amount: number;
  date: string;
}

export class CreateConstructionProgressUseCase {
  constructor(
    private constructionProgressRepo: ConstructionProgressRepository,
  ) {}

  async execute({ amount, date }: CreateConstructionProgressUseCaseRequest) {
    const constructionProgress = new ConstructionProgress(
      new Date(date),
      amount,
    );
    await this.constructionProgressRepo.create(constructionProgress);

    return {
      constructionProgress,
    };
  }
}
