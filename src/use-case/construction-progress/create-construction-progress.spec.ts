import { expect, test, describe, beforeAll } from 'bun:test';
import { MemoryConstructionProgressRepository } from '@/repository/memory/memory-construction-progress.repository';
import { CreateConstructionProgressUseCase } from './create-construction-progress';

describe('Create construction progress use case', () => {
  let memoryConstructionProgressRepo: MemoryConstructionProgressRepository;
  let createConstructionProgressUseCase: CreateConstructionProgressUseCase;

  beforeAll(() => {
    memoryConstructionProgressRepo = new MemoryConstructionProgressRepository();
    createConstructionProgressUseCase = new CreateConstructionProgressUseCase(
      memoryConstructionProgressRepo,
    );
  });

  test('should create construction progress', async () => {
    const { constructionProgress } =
      await createConstructionProgressUseCase.execute({
        amount: 930.57,
        date: new Date('2026/05/30').toISOString(),
      });

    expect(constructionProgress.id).toEqual(expect.any(String));
    expect(constructionProgress.getFormattedDate()).toEqual('05/2026');
  });
});
