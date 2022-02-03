import { Anime } from "../entity/Anime";
import { Episode } from "../entity/Episode";

export interface AnimeApiInterface {
  getAllAnime(): Promise<Anime[]>;
  getAnimeEpisodes(animeId: number): Promise<Episode[]>;
}