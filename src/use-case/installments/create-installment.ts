import { Installment } from '../../domain/installment';
import type { InstallmentsRepository } from '../../repository';

export interface CreateInstallmentUseCaseRequest {
  amount: number;
  date: string;
}

export class CreateInstallmentUseCase {
  constructor(private installmentRepository: InstallmentsRepository) {}

  async execute({ amount, date }: CreateInstallmentUseCaseRequest) {
    const installment = new Installment(new Date(date), amount);

    await this.installmentRepository.create(installment);

    return { installment };
  }
}
