import { PrismaConstructionProgressRepository } from '@/repository/prisma/prisma-construction-progress.repository';
import { CreateConstructionProgressUseCase } from '../construction-progress';

export function makeCreateConstructionProgress() {
  const constructionProgressRepo = new PrismaConstructionProgressRepository();
  const createConstructionProgress = new CreateConstructionProgressUseCase(
    constructionProgressRepo,
  );
  return createConstructionProgress;
}
