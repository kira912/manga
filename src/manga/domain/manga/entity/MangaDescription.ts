import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface MangaDescriptionProps {
  description: string;
}

export class MangaDescription extends ValueObject<MangaDescriptionProps> {
  get value(): string {
    return this.props.description;
  }

  private constructor(props: MangaDescriptionProps) {
    super(props)
  }

  public static create(description: string): Result<MangaDescription> {
    return Result.ok<MangaDescription>(new MangaDescription({ description }));
    // if (!!description === false || description.length === 0) {
    //   return Result.fail<MangaDescription>('Must provide a manga description');
    // } else description
    // return Result.ok<MangaDescription>(new MangaDescription({ description }));
  }
}
