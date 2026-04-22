import { MemoryInstallmentsRepository } from '@/repository/memory/memory-installments.repository';
import { expect, test, describe, beforeAll } from 'bun:test';
import { CreateInstallmentUseCase } from './create-installment';

describe('Create installment use case', () => {
  let memoryInstallmentRepo: MemoryInstallmentsRepository;
  let createInstallmentUseCase: CreateInstallmentUseCase;

  beforeAll(() => {
    memoryInstallmentRepo = new MemoryInstallmentsRepository();
    createInstallmentUseCase = new CreateInstallmentUseCase(
      memoryInstallmentRepo,
    );
  });

  test('should create installment', async () => {
    const { installment } = await createInstallmentUseCase.execute({
      amount: 930.57,
      date: new Date('2026/05/30').toISOString(),
    });

    expect(installment.id).toEqual(expect.any(String));
    expect(installment.getFormattedDate()).toEqual('05/2026');
  });
});
