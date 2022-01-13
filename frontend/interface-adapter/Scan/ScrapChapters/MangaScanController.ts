import {
  GetScanChapters,
  GetScanChaptersPresenterInterface,
  GetScanChaptersRequest
  
} from "../../../../manga/domain";

export class MangaScanController {
  constructor(
    private getScanChapters: GetScanChapters,
    private getScanChaptersPresenter: GetScanChaptersPresenterInterface,) {
  }

  async getChaptersList(animeName: number) {
    await this.getScanChapters.execute(new GetScanChaptersRequest(animeName), this.getScanChaptersPresenter);
  }
}