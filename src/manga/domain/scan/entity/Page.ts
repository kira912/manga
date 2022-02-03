import { Entity } from "../../../../core/domain/Entity";
import { UniqueEntityId } from "../../../../core/domain/UniqueEntityId";
import { Result } from "../../../../core/logic/Result";
import { PageId } from "./PageId";
import { PageUrl } from "./PageUrl";

interface PageProps {
  url: PageUrl;
}

export class Page extends Entity<PageProps> {
  get id(): UniqueEntityId {
    return this._id;
  }

  get pageId(): PageId {
    return PageId.create(this.id);
  }

  get url(): PageUrl {
    return this.props.url;
  }

  public static create (props: PageProps, id?: UniqueEntityId): Result<Page> {
    return Result.ok<Page>(new Page({
      ...props,
    }, id));
  }
}