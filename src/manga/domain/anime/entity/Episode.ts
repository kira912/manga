import { Entity } from "../../../../core/domain/Entity";
import { UniqueEntityId } from "../../../../core/domain/UniqueEntityId";
import { Result } from "../../../../core/logic/Result";
import { EpisodeExternalId } from "./EpisodeExternalId";
import { EpisodeImage } from "./EpisodeImage";
import { EpisodeName } from "./EpisodeName";
import { EpisodeSite } from "./EpisodeSite";
import { EpisodeUrl } from "./EpisodeUrl";

interface EpisodeProps {
  name: EpisodeName;
  site: EpisodeSite;
  url: EpisodeUrl;
  image: EpisodeImage;
}

export class Episode extends Entity<EpisodeProps> {
  get id(): UniqueEntityId {
    return this._id;
  }

  get name(): EpisodeName {
    return this.props.name;
  }

  get site(): EpisodeSite {
    return this.props.site;
  }

  get url(): EpisodeUrl {
    return this.props.url;
  }

  get image(): EpisodeImage {
    return this.props.image;
  }

  private constructor (props: EpisodeProps, id?: UniqueEntityId) {
    super(props, id)
  }

  public static create (props: EpisodeProps, id?: UniqueEntityId): Result<Episode> {
    return Result.ok<Episode>(new Episode({
      ...props,
    }, id));
  }
}