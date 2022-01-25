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
      mangas.push(new Manga(
        data.id,
        data.attributes.description.en ?? '',
        data.attributes.title.en,
        `${this.baseUriCover}/${data.id}/${covertArtRelation.attributes.fileName}`,
        data.attributes.originalLanguage,
        data.attributes.year,
        data.attributes.status,
      ));
    }

    return mangas;
  }
  async getDetails(id: string): Promise<Manga> {
    // const manga: Manga;
    const urlParams = {
      'translatedLanguage[]': 'fr',
      'order[chapter]': 'desc',
      'includes[]': 'manga',
    };

    const response = await this.makeRequest('GET', `${this.baseUri}/manga/${id}/feed`, urlParams);

    return new Manga();
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
      mangas.push(new Manga(
        data.id,
        data.attributes.description.en ?? '',
        data.attributes.title.en,
        `${this.baseUriCover}/${data.id}/${covertArtRelation.attributes.fileName}`,
        data.attributes.originalLanguage,
        data.attributes.year,
        data.attributes.status,
      ));
    }

    return mangas;
  }
}