import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface MangaNameProps {
  name: string;
}

export class MangaName extends ValueObject<MangaNameProps> {
  get value(): string {
    return this.props.name;
  }

  private constructor(props: MangaNameProps) {
    super(props)
  }

  public static create(name: string): Result<MangaName> {
    if (!!name === false || name.length === 0) {
      return Result.fail<MangaName>('Must provide a manga name');
    } else {
      return Result.ok<MangaName>(new MangaName({ name }));
    }
  }
} 