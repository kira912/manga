import { Result } from "../../../../core/logic/Result";
import { ValueObject } from "../../../../core/domain/ValueObject";

interface EpisodeImageProps {
  url: string;
}

export class EpisodeImage extends ValueObject<EpisodeImageProps> {
  get value (): string {
    return this.props.url;
  }

  private constructor (props: EpisodeImageProps) {
    super(props);
  }

  public static create (url: string): Result<EpisodeImage> {
    if (!!url === false || url.length === 0) {
      return Result.fail<EpisodeImage>('Must provide an url')
    } else {
      return Result.ok<EpisodeImage>(new EpisodeImage({ url }))
    }
  }
}