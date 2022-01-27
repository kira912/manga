import { Entity } from "../../../../core/domain/Entity";
import { UniqueEntityId } from "../../../../core/domain/UniqueEntityId";

export class EpisodeExternalId extends Entity<any> {
  get id(): UniqueEntityId {
    return this._id;
  }

  private constructor(id: UniqueEntityId) {
    super(null, id);
  }

  public static create(id: UniqueEntityId): EpisodeExternalId {
    return new EpisodeExternalId(id);
  }
}