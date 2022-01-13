import { getScanChapter, getScanChapterPages } from "../../../infrastructure";
import { 
  GetScanChaptersPresenterInterface,
  GetScanChaptersResponse,
  GetScanChaptersRequest,
  GetScanChapterPagePresenterInterface,
  GetScanChapterPageResponse,
  GetScanChapterPageRequest
} from "manga/domain";
import { Chapter } from "manga/domain/Scan/Entity/Chapter";
import { Page } from "manga/domain/Scan/Entity/Page";

export class ScanApi implements GetScanChaptersPresenterInterface, GetScanChapterPagePresenterInterface {
  getScanChaptersResponse?: GetScanChaptersResponse;
  getChapterPagesResponse?: GetScanChapterPageResponse;

  presentScanChapters(response: GetScanChaptersResponse): void {
    this.getScanChaptersResponse = response;
  }

  presentChapterPages(response: GetScanChapterPageResponse): void {
    this.getChapterPagesResponse = response;
  }

  async scrapChapters(id: number): Promise<Chapter[]> {
    await getScanChapter.execute(new GetScanChaptersRequest(id), this);
    return this.getScanChaptersResponse!.chapters;
  }

  async scrapChapterPages(bookId: string): Promise<Page[]> {
    await getScanChapterPages.execute(new GetScanChapterPageRequest(bookId), this);
    return this.getChapterPagesResponse!.pages;
  }
}