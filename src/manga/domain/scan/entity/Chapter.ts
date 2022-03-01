import { Entity } from "../../../../core/domain/Entity";
import { UniqueEntityId } from "../../../../core/domain/UniqueEntityId";
import { Result } from "../../../../core/logic/Result";
import { ChapterExternalUrl } from "./ChapterExtenalUrl";
import { ChapterExternalViewer } from "./ChapterExternalViewer";
import { ChapterName } from "./ChapterName";
import { ChapterNumber } from "./ChapterNumber";
import { Page } from "./Page";

interface ChapterProps {
  name: ChapterName;
  number: ChapterNumber;
  externalViewer: ChapterExternalViewer;
  externalUrl: ChapterExternalUrl;
  pages: Page[];
}

export class Chapter extends Entity<ChapterProps> {
  get id(): UniqueEntityId {
    return this._id;
  }

  get name(): ChapterName {
    return this.props.name;
  }

  get number(): ChapterNumber {
    return this.props.number;
  }

  get externalViewer(): ChapterExternalViewer {
    return this.props.externalViewer;
  }

  get externalUrl(): ChapterExternalUrl {
    return this.props.externalUrl;
  }

  public addPage(page: Page): void {
    const alreadyAdded = this.props.pages
      .find(p => p.id.equals(page.id));

    if (!alreadyAdded) {
      this.props.pages.push(page);
    }
  }

  public removePage(page: Page): void {
    this.props.pages = this.props.pages
      .filter(p => !p.id.equals(page.id));
  }

  public static create (props: ChapterProps, id?: UniqueEntityId): Result<Chapter> {
    return Result.ok<Chapter>(new Chapter({
      ...props,
      pages: props.pages ? props.pages : [],
    }, id));
  }
}