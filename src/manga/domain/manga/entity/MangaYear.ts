import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface MangaYearProps {
  year: string;
}

export class MangaYear extends ValueObject<MangaYearProps> {
  get value(): string {
    return this.props.year;
  }

  private constructor(props: MangaYearProps) {
    super(props)
  }

  public static create(year: string): Result<MangaYear> {
    // if (!!year === false || year.length === 0) {
    //   return Result.fail<MangaYear>('Must provide a manga year');
    // } else {
    //   return Result.ok<MangaYear>(new MangaYear({ year }));
    // }
    return Result.ok<MangaYear>(new MangaYear({ year }));
  }
} 