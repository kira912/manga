import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface EpisodeSiteProps {
  site: string;
}

export class EpisodeSite extends ValueObject<EpisodeSiteProps> {
  get value(): string {
    return this.props.site;
  }

  private constructor(props: EpisodeSiteProps) {
    super(props)
  }

  public static create(site: string): Result<EpisodeSite> {
    if (!!site === false || site.length === 0) {
      return Result.fail<EpisodeSite>('Must provide an anime description');
    } else {
      return Result.ok<EpisodeSite>(new EpisodeSite({ site }));
    }
  }
}