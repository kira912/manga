import { MangaDescription } from "../../../manga/domain/manga/entity/MangaDescription";
import { MangaImage } from "../../../manga/domain/manga/entity/MangaImage";
import { MangaName } from "../../../manga/domain/manga/entity/MangaName";
import { MangaOriginalLang } from "../../../manga/domain/manga/entity/MangaOriginalLang";
import { MangaStatus } from "../../../manga/domain/manga/entity/MangaStatus";
import { MangaYear } from "../../../manga/domain/manga/entity/MangaYear";
import { UniqueEntityId } from "../../../core/domain/UniqueEntityId";
import { Manga } from "../../../manga/domain/manga/entity/Manga";
import { MangaApiInterface } from "../../../manga/domain/manga/useCases/MangaApiInterface";
import { MangadexApiRequester } from "./MangadexApiRequester";
import { Result } from "core/logic/Result";
import { MangaId } from "manga/domain/manga/entity/MangaId";

export class MangaApiMangaDex extends MangadexApiRequester implements MangaApiInterface {
  async getAllMangaForScan(): Promise<Manga[]> {
    const mangas: Manga[] = [];
    const urlParams = {
      'availableTranslatedLanguage[]': 'fr',
      'includes[]': 'cover_art',
      'offset': 0,
      'limit': 100,
    };

    const response = await this.makeRequest('GET', `${this.baseUri}/manga`, urlParams);

    for (const data of response.data) {
      const covertArtRelation = data.relationships.filter(element => element.type === 'cover_art')[0];
      
      const mangaOrError = Manga.create({
        description: MangaDescription.create(data.attributes.description.en).getValue(),
        name: MangaName.create(data.attributes.title[Object.keys(data.attributes.title)[0]]).getValue(),
        image: MangaImage.create(`${this.baseUriCover}/${data.id}/${covertArtRelation.attributes.fileName}`).getValue(),
        originalLang: MangaOriginalLang.create(data.attributes.originalLanguage).getValue(),
        year: MangaYear.create(data.attributes.year).getValue(),
        status: MangaStatus.create(data.attributes.status).getValue(),
        episodes: [],
        chapters: [],
      }, new UniqueEntityId(data.id));

      if (mangaOrError.isFailure) {
        console.log(mangaOrError);
        continue;
      }

      mangas.push(mangaOrError.getValue());
    }
    
    return mangas;
  }
  async getDetails(id: string): Promise<Manga|null> {
    const urlParams = {
      'translatedLanguage[]': 'fr',
      'order[chapter]': 'desc',
      'includes[]': 'manga',
    };

    const { data } = await this.makeRequest('GET', `${this.baseUri}/manga/${id}/feed`, urlParams);

    if (data === null) {
      return null;
    }

    const covertArtRelation = data.relationships.filter((element) => element.type === 'cover_art')[0];
    const mangaOrError = Manga.create({
      description: MangaDescription.create(data.attributes.description.en).getValue(),
      name: MangaName.create(data.attributes.title.en).getValue(),
      image: MangaImage.create(`${this.baseUriCover}/${data.id}/${covertArtRelation.attributes.fileName}`).getValue(),
      originalLang: MangaOriginalLang.create(data.attributes.originalLanguage).getValue(),
      year: MangaYear.create(data.attributes.year).getValue(),
      status: MangaStatus.create(data.attributes.status).getValue(),
      episodes: [],
      chapters: [],
    }, new UniqueEntityId(data.id));

    if (mangaOrError.isFailure) {
      console.log(mangaOrError);

      return null;
    }

    return mangaOrError.getValue();
  }

  async searchManga(searched: string): Promise<Manga[]> {
    const mangas: Manga[] = [];
    const urlParams = {
      'title': searched,
      'includes[]': 'cover_art',
      'offset': 0,
    };

    const response = await this.makeRequest('GET', `${this.baseUri}/manga`, urlParams);

    if (response === null) {
      return mangas;
    }

    for (const data of response.data) {
      const covertArtRelation = data.relationships.filter((element) => element.type === 'cover_art')[0];
      const mangaOrError = Manga.create({
        description: MangaDescription.create(data.attributes.description.en).getValue(),
        name: MangaName.create(data.attributes.title.en).getValue(),
        image: MangaImage.create(`${this.baseUriCover}/${data.id}/${covertArtRelation.attributes.fileName}`).getValue(),
        originalLang: MangaOriginalLang.create(data.attributes.originalLanguage).getValue(),
        year: MangaYear.create(data.attributes.year).getValue(),
        status: MangaStatus.create(data.attributes.status).getValue(),
        episodes: [],
        chapters: [],
      }, new UniqueEntityId(data.id));

      if (mangaOrError.isFailure) {
        console.log(mangaOrError);
        continue;
      }

      mangas.push(mangaOrError.getValue());
    }

    return mangas;
  }

  async getMangaById(mangaId: string): Promise<Manga|undefined> {
    const urlParams = {
      'ids[]': mangaId,
      'includes[]': 'cover_art',
      'offset': 0,
      'limit': 1,
    };

    const { data } = await this.makeRequest('GET', `${this.baseUri}/manga`, urlParams);
    
    const covertArtRelation = data[0].relationships.filter(element => element.type === 'cover_art')[0];
      
    const mangaOrError = Manga.create({
      description: MangaDescription.create(data[0].attributes.description.en).getValue(),
      name: MangaName.create(data[0].attributes.title[Object.keys(data[0].attributes.title)[0]]).getValue(),
      image: MangaImage.create(`${this.baseUriCover}/${data[0].id}/${covertArtRelation.attributes.fileName}`).getValue(),
      originalLang: MangaOriginalLang.create(data[0].attributes.originalLanguage).getValue(),
      year: MangaYear.create(data[0].attributes.year).getValue(),
      status: MangaStatus.create(data[0].attributes.status).getValue(),
      episodes: [],
      chapters: [],
    }, new UniqueEntityId(data[0].id));

    if (mangaOrError.isFailure) {
      console.log(mangaOrError);
      return undefined;
    }

    return mangaOrError.getValue();
  }
}