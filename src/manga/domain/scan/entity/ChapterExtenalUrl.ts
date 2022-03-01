import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface ChapterExternalUrlProps {
  url: string;
}

export class ChapterExternalUrl extends ValueObject<ChapterExternalUrlProps> {
  get value(): string {
    return this.props.url;
  }

  private constructor(props: ChapterExternalUrlProps) {
    super(props)
  }

  public static create(url: string): Result<ChapterExternalUrl> {
    if (!!url === false || url.length === 0) {
      return Result.fail<ChapterExternalUrl>('Must provide a chapter externalurl');
    } else {
      return Result.ok<ChapterExternalUrl>(new ChapterExternalUrl({ url }));
    }
  }
}