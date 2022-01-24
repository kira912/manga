import { ScanApiInterface } from '../ScanApiInterface';
import { GetScanChaptersPresenterInterface } from './GetScanChaptersPresenterInterface';
import { GetScanChaptersRequest } from './GetScanChaptersRequest';
import { GetScanChaptersResponse } from './GetScanChaptersResponse';

export class GetScanChapters {
  constructor(private mangaApi: ScanApiInterface) {}

  async execute(request: GetScanChaptersRequest, presenter: GetScanChaptersPresenterInterface) {
    const response = new GetScanChaptersResponse();
    response.chapters = await this.mangaApi.getChapters(request.animeId);
    presenter.presentScanChapters(response);
  }
}