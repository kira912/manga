import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface ChapterNameProps {
  name: string;
}

export class ChapterName extends ValueObject<ChapterNameProps> {
  get value(): string {
    return this.props.name;
  }

  private constructor(props: ChapterNameProps) {
    super(props)
  }

  public static create(name: string): Result<ChapterName> {
    if (!!name === false || name.length === 0) {
      return Result.fail<ChapterName>('Must provide a chapter name');
    } else {
      return Result.ok<ChapterName>(new ChapterName({ name }));
    }
  }
}