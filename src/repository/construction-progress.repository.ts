import type { ConstructionProgress } from "@/domain/construction-progress";

export interface ConstructionProgressRepository {
    create(constructionProgress: ConstructionProgress): Promise<void>
    getById(id: string): Promise<ConstructionProgress | null>
    fetchAllAmount(): Promise<number>
}