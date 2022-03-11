import { Anime } from "../entity/Anime";
import { Episode } from "../entity/Episode";

export interface AnimeApiInterface {
  getAllAnime(page: number): Promise<Anime[]>;
  getAnimeEpisodes(page: number, animeId: number): Promise<Episode[]>;
}