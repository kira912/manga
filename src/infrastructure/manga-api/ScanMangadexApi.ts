import { Anime, Chapter, Page, ScanApiInterface } from '../../manga/domain';

export class ScanMangadexApi implements ScanApiInterface {
  private baseUri = 'https://api.mangadex.org/manga';
  private baseUriCover = 'https://uploads.mangadex.org/covers';
  private $baseViewerUrl =
    'https://jumpg-webapi.tokyo-cdn.com/api/manga_viewer';

  async getChapters(animeId: string): Promise<Chapter[]> {
    const chapters: Chapter[] = [];
    const urlParams = {
      'translatedLanguage[]': 'fr',
      'order[chapter]': 'desc',
    };

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    const options = {
      method: 'GET',
      headers,
    };

    const result = await fetch(
      `${this.baseUri}/${animeId}/feed?${new URLSearchParams(urlParams)}`,
      options
    );

    if (result.status !== 200) {
      return chapters;
    }

    const response = await result.json();

    if (response.result !== 'ok') {
      console.error(response);

      return chapters;
    }

    for (const data of response.data) {

      const viewerId = this.getViewerId(data.attributes.externalUrl);
      if (data.attributes.externalUrl === null || viewerId === null) {
        continue;
      }

      chapters.push(
        new Chapter(data.id, data.attributes.title, data.attributes.chapter, viewerId),
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

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    const options = {
      method: 'GET',
      headers,
    };

    const result = await fetch(
      `${this.$baseViewerUrl}?${new URLSearchParams(urlParams)}`,
      options
    );

    if (result.status !== 200) {
      console.error(result);
      return pages;
    }

    const response = await result.text();
    const urls = this.extractUrls(response);
    const encryptions = this.extractEncryptionHex(response);

    for (const url of urls) {
      if (!url.includes(viewerId)) {
        continue;
      }

      if (encryptions[urls.indexOf(url)]) {
        try {
          const blobUrl = await this.getBlobUrl(
            url,
            encryptions[urls.indexOf(url)]
          );
          pages.push(new Page(viewerId, blobUrl));
        } catch (error) {}
      }
    }

    return pages;
  }

  private extractUrls(response: string): RegExpMatchArray {
    let urls: RegExpMatchArray | null = [];
    const regex: RegExp =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,137}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gm;

    urls = response.match(regex);

    if (urls === null) {
      return [];
    }

    return urls;
  }

  private extractEncryptionHex(response: string): RegExpMatchArray {
    let encryptions: RegExpMatchArray | null = [];
    const regex: RegExp = /[0-9a-z]+$/gm;

    encryptions = response.match(regex);

    if (encryptions === null) {
      return [];
    }

    return encryptions;
  }

  private hexToBin(hex): Uint8Array {
    return new Uint8Array(
      hex.match(/.{1,2}/g).map((t) => {
        return parseInt(t, 16);
      })
    );
  }

  private getBlobUrl(url: string, hex: string): Promise<string> {
    return new Promise((resolve, reject) => {
      let hexBin: Uint8Array | null = null;
      hexBin = this.hexToBin(hex);
      const request = new XMLHttpRequest();
      let blobUrl: string | null = null;

      request.onreadystatechange = () => {
        if (4 === request.readyState) {
          if (200 !== request.status) {
            reject(`Can't load ${url}`);
          }
          const arrayBufferResponse = new Uint8Array(request.response);
          if (hexBin) {
            for (
              let a = hexBin.length, s = 0;
              s < arrayBufferResponse.length;
              s++
            ) {
              arrayBufferResponse[s] ^= hexBin[s % a];
            }

            blobUrl = URL.createObjectURL(new Blob([arrayBufferResponse]));
            resolve(blobUrl);
          }
        }
      };
      request.open('GET', url, true), (request.responseType = 'arraybuffer');
      request.send();
    });
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

  async searchMangaBy(searched: string): Promise<Anime[]> {
    const animes: Anime[] = [];
    const urlParams = {
      title: searched,
      'includes[]': 'cover_art',
      offset: 0,
    };

    const headers = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });

    const options = {
      method: 'GET',
      headers,
    };

    const result = await fetch(
      `${this.baseUri}?${new URLSearchParams(urlParams)}`,
      options
    );

    if (result.status !== 200) {
      return animes;
    }

    const response = await result.json();

    console.log(response);

    if (response.result !== 'ok') {
      console.error(response);

      return animes;
    }

    for (const data of response.data) {
      const covertArtRelation = data.relationships.filter(
        (element) => element.type === 'cover_art'
      )[0];
      animes.push(
        new Anime(
          data.id,
          '',
          data.attributes.title.en,
          `${this.baseUriCover}/${data.id}/${covertArtRelation.attributes.fileName}`
        )
      );
    }

    return animes;
  }
}
