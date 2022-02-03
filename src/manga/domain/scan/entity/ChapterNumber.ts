import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface ChapterNumberProps {
  number: string;
}

export class ChapterNumber extends ValueObject<ChapterNumberProps> {
  get value(): string {
    return this.props.number;
  }

  private constructor(props: ChapterNumberProps) {
    super(props)
  }

  public static create(number: string): Result<ChapterNumber> {
    if (!!number === false || number.length === 0) {
      return Result.fail<ChapterNumber>('Must provide a chapter number');
    } else {
      return Result.ok<ChapterNumber>(new ChapterNumber({ number }));
    }
  }
}