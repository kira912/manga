import { Chapter } from "manga/domain";
import { Anime } from "../Entity/Anime";
import { Episode } from "../Entity/Episode";

export interface AnimeApiInterface {
  getAll(): Promise<Anime[]>;

  getAnimeEpisodes(animeId: number): Promise<Episode[]>;
}