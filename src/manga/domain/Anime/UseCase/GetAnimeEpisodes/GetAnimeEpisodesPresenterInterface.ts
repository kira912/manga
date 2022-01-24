import { GetAnimeEpisodesResponse } from './GetAnimeEpisodesResponse';

export interface GetAnimeEpisodesPresenterInterface {
    presentAnimeEpisodes(response: GetAnimeEpisodesResponse): void;
}