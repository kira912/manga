import { UniqueEntityId } from "../../../../core/domain/UniqueEntityId";
import { Result } from "../../../../core/logic/Result";
import { Chapter, Episode } from "../../../../manga/domain";
import { AggregateRoot } from "../../../../core/domain/AggregateRoot";
import { MangaDescription } from "./MangaDescription";
import { MangaId } from "./MangaId";
import { MangaImage } from "./MangaImage";
import { MangaName } from "./MangaName";
import { MangaOriginalLang } from "./MangaOriginalLang";
import { MangaStatus } from "./MangaStatus";
import { MangaYear } from "./MangaYear";
import { MangaCreatedEvent } from "../../../../manga/domain/events/MangaCreatedEvent";

interface MangaProps {
  description: MangaDescription;
  name: MangaName;
  image: MangaImage;
  originalLang: MangaOriginalLang;
  year: MangaYear;
  status: MangaStatus;
  episodes: Episode[];
  chapters: Chapter[];
}

export class Manga extends AggregateRoot<MangaProps> {
  get mangaId(): MangaId {
    return MangaId.create(this.id)
  }

  get mangaDescription(): MangaDescription {
    return this.props.description;
  }

  get mangaName(): MangaName {
    return this.props.name;
  }

  get mangaImage(): MangaImage {
    return this.props.image;
  }

  get mangaOriginalLang(): MangaOriginalLang {
    return this.props.originalLang;
  }

  get mangaYear(): MangaYear {
    return this.props.year;
  }

  get mangaStatus(): MangaStatus {
    return this.props.status;
  }

  get episodes(): Episode[] {
    return this.props.episodes;
  }

  get chapters(): Chapter[] {
    return this.props.chapters;
  }

  public addChapter(chapter: Chapter): void {
    const alreadyAdded = this.props.chapters
      .find(c => c.id.equals(chapter.id));

    if (!alreadyAdded) {
      this.props.chapters.push(chapter);
    }
  }

  public removeChapter(chapter: Chapter): void {
    this.props.chapters = this.props.chapters
      .filter(c => !c.id.equals(chapter.id));
  }

  private constructor (props: MangaProps, id?: UniqueEntityId) {
    super(props, id);
  }

  public static create (props: MangaProps, id?: UniqueEntityId): Result<Manga> {
    const manga = new Manga({
      ...props,
      episodes: props.episodes ? props.episodes : [],
      chapters: props.chapters ? props.chapters : [],
    }, id)
    const isNewlyCreated = !!id === false;

    if (isNewlyCreated) {
      manga.addDomainEvent(new MangaCreatedEvent(manga.mangaId))
    }

    return Result.ok<Manga>(manga);
  }
}
