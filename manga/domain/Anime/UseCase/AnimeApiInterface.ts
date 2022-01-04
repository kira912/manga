import { Anime } from "../Entity/Anime";
import { Episode } from "../Entity/Episode";

export interface AnimeApiInterface {
  getAllAnime(): Promise<Anime[]>;

  // get(animeId: string): Promise<Anime | undefined>;
  
  // getEpisodes(animeId: string): Promise<Episode[]>;

  // getEpisode(episodeId: string): Promise<Episode | undefined>;
}