export class MangadexApiRequester {
  baseUri = 'https://api.mangadex.org';
  baseUriCover = 'https://uploads.mangadex.org/covers';
  baseViewerUrl = 'https://jumpg-webapi.tokyo-cdn.com/api/manga_viewer';

  async makeRequest(
    method: string,
    url: string,
    urlParams: object,
    customHeaders: object|null = null,
    isJson: boolean = true,
    bypassCors: boolean = true,
  ): Promise<any|null> {

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    if (bypassCors) {
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, OPTIONS');
    }

    if (customHeaders !== null) {
      for (const key in customHeaders) {
        if (Object.prototype.hasOwnProperty.call(customHeaders, key)) {
          const headerValue = customHeaders[key];
          headers.append(key, headerValue);
        }
      }
    }

    const options = { method, headers };

    const params = new URLSearchParams();
    for (const key in urlParams) {
      if (Object.prototype.hasOwnProperty.call(urlParams, key)) {
        params.append(key, urlParams[key]);
      }
    }

    try {
      const result = await fetch(`${url}?${params}`, options);
      if (result.status !== 200) {
        return null;
      }

      if (isJson) {
        const response = await result.json();
        if (response.result !== 'ok') {
          console.error(response);

          return null;
        }

        return response;
      }

      return result;
    } catch (error) {
      console.error(error);

      return null;
    }
  }
}
