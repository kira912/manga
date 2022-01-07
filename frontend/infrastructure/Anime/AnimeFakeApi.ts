import { Anime } from "manga/domain/Anime/Entity/Anime";
import { Episode } from "manga/domain/Anime/Entity/Episode";
import { AnimeApiInterface } from "manga/domain/Anime/UseCase/AnimeApiInterface";
import { AnimeApi } from "./AnimeApi";

export class AnimeFakeApi implements AnimeApiInterface {
  constructor(private api: AnimeApi) { }

  async getAllAnime(): Promise<Anime[]> {
    return this.api.getAllAnime();
  }

  getAnimeEpisodes(animeId: string): Promise<Episode[]> {
      return this.api.getAnimeEpisodes(animeId);
  }
}