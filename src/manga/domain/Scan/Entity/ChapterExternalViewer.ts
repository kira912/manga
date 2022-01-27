import { ValueObject } from "../../../../core/domain/ValueObject";
import { Result } from "../../../../core/logic/Result";

interface ChapterExternalViewerProps {
  viewer: string;
}

export class ChapterExternalViewer extends ValueObject<ChapterExternalViewerProps> {
  get value(): string {
    return this.props.viewer;
  }

  private constructor(props: ChapterExternalViewerProps) {
    super(props)
  }

  public static create(viewer: string): Result<ChapterExternalViewer> {
    if (!!viewer === false || viewer.length === 0) {
      return Result.fail<ChapterExternalViewer>('Must provide a chapter external viewer');
    } else {
      return Result.ok<ChapterExternalViewer>(new ChapterExternalViewer({ viewer }));
    }
  }
}