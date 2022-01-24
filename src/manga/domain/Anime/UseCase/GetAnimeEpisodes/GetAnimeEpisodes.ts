import { AnimeApiInterface } from '../AnimeApiInterface';
import { GetAnimeEpisodeRequest } from './GetAnimeEpisodeRequest';
import { GetAnimeEpisodesPresenterInterface } from './GetAnimeEpisodesPresenterInterface';
import { GetAnimeEpisodesResponse } from './GetAnimeEpisodesResponse';

export class GetAnimeEpisodes {
  constructor(private mangaApi: AnimeApiInterface) {}

  async execute(request: GetAnimeEpisodeRequest, presenter: GetAnimeEpisodesPresenterInterface) {
    const response = new GetAnimeEpisodesResponse();
    response.episodes = await this.mangaApi.getAnimeEpisodes(request.animeId);
    
    presenter.presentAnimeEpisodes(response);
  }
}