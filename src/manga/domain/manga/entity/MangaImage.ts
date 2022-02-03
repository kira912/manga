import { Result } from "../../../../core/logic/Result";
import { ValueObject } from "../../../../core/domain/ValueObject";

interface MangaImageProps {
  url: string;
}

export class MangaImage extends ValueObject<MangaImageProps> {
  get value (): string {
    return this.props.url;
  }

  private constructor (props: MangaImageProps) {
    super(props);
  }

  public static create (url: string): Result<MangaImage> {
    if (!!url === false || url.length === 0) {
      return Result.fail<MangaImage>('Must provide an url')
    } else {
      return Result.ok<MangaImage>(new MangaImage({ url }))
    }
  }
}