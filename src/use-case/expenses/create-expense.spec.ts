import { MemoryExpenseRepository } from '@/repository/memory/memory-expense.repository';
import { expect, test, describe, beforeAll } from 'bun:test';
import { CreateExpenseUseCase } from './create-expense';

describe('Create expense use case', () => {
  let memoryExpenseRepo: MemoryExpenseRepository;
  let createExpenseUseCase: CreateExpenseUseCase;

  beforeAll(() => {
    memoryExpenseRepo = new MemoryExpenseRepository();
    createExpenseUseCase = new CreateExpenseUseCase(memoryExpenseRepo);
  });

  test('should create expense', async () => {
    const { expense } = await createExpenseUseCase.execute({
      amount: 33,
      date: new Date('2026/05/30').toISOString(),
      name: 'thing',
    });

    expect(expense.id).toEqual(expect.any(String));
    expect(expense.getFormattedDate()).toEqual('05/2026');
    expect(expense.getName()).toEqual('thing');
  });
});
