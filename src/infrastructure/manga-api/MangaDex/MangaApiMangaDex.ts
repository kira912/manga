import { MangaDescription } from "../../../manga/domain/Manga/Entity/MangaDescription";
import { MangaImage } from "../../../manga/domain/Manga/Entity/MangaImage";
import { MangaName } from "../../../manga/domain/Manga/Entity/MangaName";
import { MangaOriginalLang } from "../../../manga/domain/Manga/Entity/MangaOriginalLang";
import { MangaStatus } from "../../../manga/domain/Manga/Entity/MangaStatus";
import { MangaYear } from "../../../manga/domain/Manga/Entity/MangaYear";
import { UniqueEntityId } from "../../../core/domain/UniqueEntityId";
import { Manga } from "../../../manga/domain/Manga/Entity/Manga";
import { MangaApiInterface } from "../../../manga/domain/Manga/UseCase/MangaApiInterface";
import { MangadexApiRequester } from "./MangadexApiRequester";

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
  async getDetails(id: string): Promise<Manga|null> {
    const urlParams = {
      'translatedLanguage[]': 'fr',
      'order[chapter]': 'desc',
      'includes[]': 'manga',
    };

    const response = await this.makeRequest('GET', `${this.baseUri}/manga/${id}/feed`, urlParams);

    if (response === null) {
      return null;
    }

    const covertArtRelation = response.data.relationships.filter((element) => element.type === 'cover_art')[0];
    const mangaOrError = Manga.create({
      description: MangaDescription.create(response.data.attributes.description.en).getValue(),
      name: MangaName.create(response.data.attributes.title.en).getValue(),
      image: MangaImage.create(`${this.baseUriCover}/${data.id}/${covertArtRelation.attributes.fileName}`).getValue(),
      originalLang: MangaOriginalLang.create(response.data.attributes.originalLanguage).getValue(),
      year: MangaYear.create(response.data.attributes.year).getValue(),
      status: MangaStatus.create(response.data.attributes.status).getValue(),
      episodes: [],
      chapters: [],
    }, new UniqueEntityId(response.data.id));

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
}