import { UniqueEntityId } from '../../../core/domain/UniqueEntityId';
import { ChapterExternalViewer } from '../../../manga/domain/scan/entity/ChapterExternalViewer';
import { ChapterName } from '../../../manga/domain/scan/entity/ChapterName';
import { ChapterNumber } from '../../../manga/domain/scan/entity/ChapterNumber';
import { PageUrl } from '../../../manga/domain/scan/entity/PageUrl';
import { Chapter, Page, ScanApiInterface } from '../../../manga/domain';
import { MangadexApiRequester } from './MangadexApiRequester';
import {
  extractEncryptionHex,
  getBlobUrl,
  extractUrls,
} from './Utils/MangaDexBlobUtils';
import { ChapterExternalUrl } from '../../../manga/domain/scan/entity/ChapterExtenalUrl';

export class ScanMangaDexApi
  extends MangadexApiRequester
  implements ScanApiInterface
{
  async getChapters(animeId: string): Promise<Chapter[]> {
    const chapters: Chapter[] = [];
    const urlParams = {
      'translatedLanguage[]': 'fr',
      'order[chapter]': 'desc',
    };

    const response = await this.makeRequest(
      'GET',
      `${this.baseUri}/manga/${animeId}/feed`,
      urlParams,
    );

    if (response === null) {
      return chapters;
    }

    for (const data of response.data) {
      const viewerId = this.getViewerId(data.attributes.externalUrl);
      if (data.attributes.externalUrl === null || viewerId === null) {
        continue;
      }

      const chapterOrError = Chapter.create({
        name: ChapterName.create(data.attributes.title).getValue(),
        number: ChapterNumber.create(data.attributes.chapter).getValue(),
        externalViewer: ChapterExternalViewer.create(viewerId).getValue(),
        externalUrl: ChapterExternalUrl.create(data.attributes.externalUrl).getValue(),
        pages: []
      });

      if (chapterOrError.isFailure) {
        console.log(chapterOrError);
        continue;
      }

      chapters.push(chapterOrError.getValue());
    }

    return chapters;
  }

  async getChapterPages(viewerId: string): Promise<Page[]> {
    const pages: Page[] = [];

    const urlParams = {
      chapter_id: viewerId,
      split: 'no',
      image_quality: 'high',
    };

    const result = await this.makeRequest(
      'GET',
      `${this.baseViewerUrl}`,
      urlParams,
      null,
      false,
      false,
    );

    if (result === null) {
      return pages;
    }

    const response = await result.text();
    const urls = extractUrls(response);
    const encryptions = extractEncryptionHex(response);

    for (const url of urls) {
      if (!url.includes(viewerId)) {
        continue;
      }

      if (encryptions[urls.indexOf(url)]) {
        try {
          const blobUrl = await getBlobUrl(url, encryptions[urls.indexOf(url)]);
          const pageOrError = Page.create({ url: PageUrl.create(blobUrl).getValue() }, new UniqueEntityId(viewerId))

          if (pageOrError.isFailure) {
            console.log(pageOrError);
            continue;
          }

          pages.push(pageOrError.getValue());
        } catch (error) {
          console.log(error);
        }
      }
    }

    return pages;
  }

  private getViewerId(viewerUrl: string | null): string | null {
    if (viewerUrl === null) {
      return null;
    }
    const urlSplitted = viewerUrl.split('/');

    if (urlSplitted.length === 0) {
      return null;
    }

    return urlSplitted[urlSplitted.length - 1];
  }
}
