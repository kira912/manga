import { MangaApiInterface } from './MangaApiInterface';
import { GetMangaDetailPresenterInterface } from './GetMangaDetailPresenterInterface';
import { GetMangaDetailRequest } from './GetMangaDetailRequest';
import { GetMangaDetailResponse } from './GetMangaDetailResponse';

export class GetMangaDetail {
  constructor(private mangaApi: MangaApiInterface) {}

  async execute(request: GetMangaDetailRequest, presenter: GetMangaDetailPresenterInterface) {
    const response = new GetMangaDetailResponse();
    response.manga = await this.mangaApi.getDetails(request.id);
    presenter.presentMangaDetail(response);
  }
}