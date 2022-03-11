import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface EpisodeUrlProps {
  url: string;
}

export class EpisodeUrl extends ValueObject<EpisodeUrlProps> {
  get value(): string {
    return this.props.url;
  }

  private constructor(props: EpisodeUrlProps) {
    super(props)
  }

  public static create(url: string): Result<EpisodeUrl> {
    if (!!url === false || url.length === 0) {
      return Result.fail<EpisodeUrl>('Must provide an anime episode url');
    } else {
      return Result.ok<EpisodeUrl>(new EpisodeUrl({ url }));
    }
  }
}