import type { Installment } from '../../domain/installment';
import type { InstallmentsRepository } from '../installments.repository';

export class MemoryInstallmentsRepository implements InstallmentsRepository {
  public installments: Installment[] = [];

  async create(installment: Installment): Promise<void> {
    this.installments.push(installment);
  }
  async getById(id: string): Promise<Installment | null> {
    const f = this.installments.find((el) => el.id === id);
    if (!f) {
      return null;
    }

    return f;
  }

  async fetchAllAmount(): Promise<number> {
    return this.installments.reduce((a, b) => a + b.getAmount(), 0)
  }
}
