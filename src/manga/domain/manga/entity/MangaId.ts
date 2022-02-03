import { Entity } from "../../../../core/domain/Entity";
import { UniqueEntityId } from "../../../../core/domain/UniqueEntityId";

export class MangaId extends Entity<any> {
  get id(): UniqueEntityId {
    return this._id;
  }

  private constructor(id: UniqueEntityId) {
    super(null, id);
  }

  public static create(id: UniqueEntityId): MangaId {
    return new MangaId(id);
  }
}