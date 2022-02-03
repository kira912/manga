import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface PageUrlProps {
  url: string;
}

export class PageUrl extends ValueObject<PageUrlProps> {
  get value(): string {
    return this.props.url;
  }

  private constructor(props: PageUrlProps) {
    super(props)
  }

  public static create(url: string): Result<PageUrl> {
    if (!!url === false || url.length === 0) {
      return Result.fail<PageUrl>('Must provide a page url');
    } else {
      return Result.ok<PageUrl>(new PageUrl({ url }));
    }
  }
}