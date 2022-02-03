import {
  GetScanChapters,
  GetScanChaptersPresenterInterface,
  GetScanChaptersRequest,
} from "../../../../manga/domain";

export class ChapterController {
  constructor(
    private getScanChapters: GetScanChapters,
    private getScanChaptersPresenter: GetScanChaptersPresenterInterface,
  ) {
  }

  async getChapters(animeId: string) {
    await this.getScanChapters.execute(new GetScanChaptersRequest(animeId), this.getScanChaptersPresenter);
  }
}