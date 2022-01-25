import { Chapter, Page, ScanApiInterface } from '../../../manga/domain';
import { MangadexApiRequester } from './MangadexApiRequester';
import {
  extractEncryptionHex,
  getBlobUrl,
  extractUrls,
} from './Utils/MangaDexBlobUtils';

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

      chapters.push(
        new Chapter(
          data.id,
          data.attributes.title,
          data.attributes.chapter,
          viewerId,
        ),
      );
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
          pages.push(new Page(viewerId, blobUrl));
        } catch (error) {}
      }
    }

    console.log(pages);
    
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
