import { AnimeApiInterface } from "../../manga/domain/Anime/UseCase/AnimeApiInterface";
import { Anime } from '../../manga/domain/Anime/Entity/Anime';
import { Episode } from "../../manga/domain/Anime/Entity/Episode";

export class AnilistApi implements AnimeApiInterface {
  private baseUri = "https://graphql.anilist.co";

  async getAllAnime(): Promise<Anime[]> {
    const query = `
      query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
          pageInfo {
            total
            perPage
          }
          media(type: ANIME, sort: FAVOURITES_DESC) {
            id
            description
            coverImage {
              medium
            }
            title {
              english
            }
          }
        }
      }
    `;

    const variables = {
      query: query,
      page: 1,
      perPage: 3,
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

    const animes = Array();
    const response = await result.json();

    for (const data of response.data.Page.media) {
      animes.push(new Anime(
        data.id,
        data.description,
        data.title.english,
        data.slug,
        data.coverImage.medium
      ));
    }

    return animes;
  }

  async getAnimeEpisodes(animeId: string): Promise<Episode[]> {
    const query = `
      query ($animeId: Int) {
        Media(id: $animeId, type: ANIME, sort: FAVOURITES_DESC) {
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

    const animeEpisodes = Array();
    const response = await result.json();
    
    for (const data of response.data.Media.streamingEpisodes) {
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