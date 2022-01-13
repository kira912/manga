import { Anime, Episode, AnimeApiInterface } from "../../../manga/domain";
import { AnimeApi } from "./AnimeApi";

export class AnimeFakeApi implements AnimeApiInterface {
  constructor(private api: AnimeApi) { }

  getAll(): Promise<Anime[]> {
    return this.api.getAllAnime();
  }

  getAnimeEpisodes(animeId: number): Promise<Episode[]> {
    return this.api.getAnimeEpisodes(animeId);
  }
}