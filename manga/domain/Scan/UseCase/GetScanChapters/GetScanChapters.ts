import { AnimeScrapperInterface } from '../AnimeScrapperInterface';
import { GetScanChaptersPresenterInterface } from './GetScanChaptersPresenterInterface';
import { GetScanChaptersRequest } from './GetScanChaptersRequest';
import { GetScanChaptersResponse } from './GetScanChaptersResponse';

export class GetScanChapters {
  constructor(private mangaScrapper: AnimeScrapperInterface) {}

  async execute(request: GetScanChaptersRequest, presenter: GetScanChaptersPresenterInterface) {
    const response = new GetScanChaptersResponse();
    response.chapters = await this.mangaScrapper.scrapChapters(request.animeId);
    presenter.presentScanChapters(response);
  }
}