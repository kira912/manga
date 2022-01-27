import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface EpisodeNameProps {
  name: string;
}

export class EpisodeName extends ValueObject<EpisodeNameProps> {
  get value(): string {
    return this.props.name;
  }

  private constructor(props: EpisodeNameProps) {
    super(props)
  }

  public static create(name: string): Result<EpisodeName> {
    if (!!name === false || name.length === 0) {
      return Result.fail<EpisodeName>('Must provide a manga name');
    } else {
      return Result.ok<EpisodeName>(new EpisodeName({ name }));
    }
  }
} 