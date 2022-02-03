export const extractUrls = (response: string): RegExpMatchArray => {
  let urls: RegExpMatchArray | null = [];
  const regex: RegExp =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,137}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gm;

  urls = response.match(regex);

  if (urls === null) {
    return [];
  }

  return urls;
};

export const extractEncryptionHex = (response: string): RegExpMatchArray => {
  let encryptions: RegExpMatchArray | null = [];
  const regex: RegExp = /[0-9a-z]+$/gm;

  encryptions = response.match(regex);

  if (encryptions === null) {
    return [];
  }

  return encryptions;
};

export const hexToBin = (hex): Uint8Array => {
  return new Uint8Array(
    hex.match(/.{1,2}/g).map((t) => {
      return parseInt(t, 16);
    })
  );
};

export const getBlobUrl = (url: string, hex: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    let hexBin: Uint8Array | null = null;
    hexBin = hexToBin(hex);
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
    request.open("GET", url, true), (request.responseType = "arraybuffer");
    request.send();
  });
};
