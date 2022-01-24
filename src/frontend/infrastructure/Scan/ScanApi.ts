import { getScanChapter, getScanChapterPages } from "../../../infrastructure";
import { 
  GetScanChaptersPresenterInterface,
  GetScanChaptersResponse,
  GetScanChaptersRequest,
  GetScanChapterPagePresenterInterface,
  GetScanChapterPageResponse,
  Page,
  GetScanChapterPageRequest,
} from "manga/domain";
import { Chapter } from "manga/domain/Scan/Entity/Chapter";

export class ScanApi implements GetScanChaptersPresenterInterface, GetScanChapterPagePresenterInterface {
  getScanChaptersResponse?: GetScanChaptersResponse;
  getChapterPagesResponse?: GetScanChapterPageResponse;

  presentScanChapters(response: GetScanChaptersResponse): void {
    this.getScanChaptersResponse = response;
  }

  presentChapterPages(response: GetScanChapterPageResponse): void {
    this.getChapterPagesResponse = response;
  }

  async getChapters(id: string): Promise<Chapter[]> {
    await getScanChapter.execute(new GetScanChaptersRequest(id), this);
    return this.getScanChaptersResponse!.chapters;
  }

  async getChapterPages(id: string): Promise<Page[]> {
    await getScanChapterPages.execute(new GetScanChapterPageRequest(id), this);
    return this.getChapterPagesResponse!.pages;
  }
}