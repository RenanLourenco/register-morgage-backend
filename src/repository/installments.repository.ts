import type { Installment } from '../domain/installment';

export interface InstallmentsRepository {
  create(installment: Installment): Promise<void>;
  getById(id: string): Promise<Installment | null>;
  fetchAllAmount(): Promise<number>
}
