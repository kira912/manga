import { Anime, Episode, AnimeApiInterface, Chapter } from '../../manga/domain';

export class AnilistApi implements AnimeApiInterface {
  private baseUri = "https://api.mangadex.org";
  private baseUriCover = "https://uploads.mangadex.org/covers";

  async getAll(): Promise<Anime[]> {
    const urlParams = {
      "availableTranslatedLanguage[]": "fr",
      "includes[]": "cover_art",
      "offset": 0,
      "limit": 100
    }

    const headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
    });

    const options = { 
      method: 'GET',
      headers: headers,
    };
      
    const result = await fetch(`${this.baseUri}/manga?${new URLSearchParams(urlParams)}`, options)

    if (result.status !== 200) {
      return [];
    }

    const animes: Anime[] = [];
    const response = await result.json();

    if (response.result !== 'ok') {
      console.error(response)

      return animes;
    }

    for (const data of response.data) {
      const covertArtRelation = data.relationships.filter(element => element.type === "cover_art")[0];
      animes.push(new Anime(
        data.id,
        data.attributes.description.en ?? '',
        data.attributes.title.en,
        `${this.baseUriCover}/${data.id}/${covertArtRelation.attributes.fileName}`
      ));
    }

    return animes;
  }

  async getAnimeEpisodes(animeId: number): Promise<Episode[]> {
    const query = `
      query ($animeId: Int) {
        Media(id: $animeId, type: ANIME) {
          id
          description
          coverImage {
            medium
          }
          title {
            english
          }
          streamingEpisodes {
            title
            thumbnail
            url
            site
          }
        }
      }
    `;

    const variables = {
      query: query,
      id: animeId
    };

    const headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
    });

    const options = { 
      method: 'POST',
      headers: headers,
      body: JSON.stringify(variables),
    };
      
    const result = await fetch(this.baseUri, options)
    
    if (result.status !== 200) {
      return [];
    }

    const animeEpisodes: Episode[] = [];
    const response = await result.json();
    console.log(response);
    
    
    for (const data of response.data.Media.streamingEpisodes) {
      // console.log(data);
      animeEpisodes.push(new Episode(
        data.title,
        data.site,
        data.url,
        data.thumbnail
      ));
    }
    
    return animeEpisodes;
  }
}