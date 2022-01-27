
import { IDomainEvent } from "../../../core/domain/events/IDomainEvent";
import { UniqueEntityId } from "../../../core/domain/UniqueEntityId";
import { MangaId } from "../Manga/Entity/MangaId";

export class MangaCreatedEvent implements IDomainEvent {
  public dateTimeOccurred!: Date;
  public mangaId: MangaId;

  constructor (mangaId: MangaId) {
    this.mangaId = mangaId;
  }

  public getAggregateId (): UniqueEntityId {
    return this.mangaId.id;
  }
}