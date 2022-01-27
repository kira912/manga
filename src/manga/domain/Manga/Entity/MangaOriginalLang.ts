import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface MangaOriginalLangProps {
  lang: string;
}

export class MangaOriginalLang extends ValueObject<MangaOriginalLangProps> {
  get value(): string {
    return this.props.lang;
  }

  private constructor(props: MangaOriginalLangProps) {
    super(props)
  }

  public static create(lang: string): Result<MangaOriginalLang> {
    if (!!lang === false || lang.length === 0) {
      return Result.fail<MangaOriginalLang>('Must provide a manga original lang');
    } else {
      return Result.ok<MangaOriginalLang>(new MangaOriginalLang({ lang }));
    }
  }
} 