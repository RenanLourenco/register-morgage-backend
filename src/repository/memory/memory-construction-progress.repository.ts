import type { ConstructionProgress } from '@/domain/construction-progress';
import type { ConstructionProgressRepository } from '../construction-progress.repository';

export class MemoryConstructionProgressRepository implements ConstructionProgressRepository {
  public constructionProgresses: ConstructionProgress[] = [];

  async create(constructionProgress: ConstructionProgress): Promise<void> {
    this.constructionProgresses.push(constructionProgress);
  }
  async getById(id: string): Promise<ConstructionProgress | null> {
    const f = this.constructionProgresses.find((el) => el.id === id);
    if (!f) {
      return null;
    }

    return f;
  }

  async fetchAllAmount(): Promise<number> {
    return this.constructionProgresses.reduce((a, b) => a + b.getAmount(), 0);
  }
}
