import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface MangaStatusProps {
  status: string;
}

export class MangaStatus extends ValueObject<MangaStatusProps> {
  get value(): string {
    return this.props.status;
  }

  private constructor(props: MangaStatusProps) {
    super(props)
  }

  public static create(status: string): Result<MangaStatus> {
    if (!!status === false || status.length === 0) {
      return Result.fail<MangaStatus>('Must provide a manga status');
    } else {
      return Result.ok<MangaStatus>(new MangaStatus({ status }));
    }
  }
} 