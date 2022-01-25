import { Anime } from "../Entity/Anime";
import { Episode } from "../Entity/Episode";

export interface AnimeApiInterface {
  getAllAnime(): Promise<Anime[]>;
  getAnimeEpisodes(animeId: number): Promise<Episode[]>;
}