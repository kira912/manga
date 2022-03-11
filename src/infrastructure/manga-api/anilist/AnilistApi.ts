import { EpisodeImage } from '../../../manga/domain/anime/entity/EpisodeImage';
import { EpisodeName } from '../../../manga/domain/anime/entity/EpisodeName';
import { EpisodeSite } from '../../../manga/domain/anime/entity/EpisodeSite';
import { EpisodeUrl } from '../../../manga/domain/anime/entity/EpisodeUrl';
import { Anime, Episode, AnimeApiInterface } from '../../../manga/domain';

export class AnilistApi implements AnimeApiInterface {
  private baseUri = "https://graphql.anilist.co";

  async getAllAnime(page: number = 1): Promise<Anime[]> {
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
      page: page,
      perPage: 10,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
    });

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({query: query, variables: variables}),
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
        data.coverImage.medium,
      ));
    }

    return animes;
  }

  async getAnimeEpisodes(page: number = 1, animeId: number): Promise<Episode[]> {
    const query = `
      query ($animeId: Int, $page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
          media(id: $animeId, type: ANIME, sort: ID_DESC) {
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
      }
    `;

    const variables = {
      animeId,
      page,
      perPage: 10,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
    });

    const options = { 
      method: 'POST',
      headers,
      body: JSON.stringify({query, variables}),
    };

    const result = await fetch(this.baseUri, options);

    if (result.status !== 200) {
      return [];
    }

    const animeEpisodes: Episode[] = [];
    const response = await result.json();

    console.log(response.data.Page.media[0].streamingEpisodes.length);

    for (const data of response.data.Page.media[0].streamingEpisodes) {
      const episodeOrError = Episode.create({
        name: EpisodeName.create(data.title).getValue(),
        image: EpisodeImage.create(data.thumbnail).getValue(),
        site: EpisodeSite.create(data.site).getValue(),
        url: EpisodeUrl.create(data.url).getValue(),
      });
      
      if (episodeOrError.isFailure) {
        console.log(episodeOrError);
        continue;
      }

      animeEpisodes.push(episodeOrError.getValue());
    }

    return animeEpisodes;
  }
}
