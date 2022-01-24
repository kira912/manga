import {
    GetAllAnime,
    GetAnimeEpisodes,
    GetScanChapters,
    GetScanChapterPage,
    SearchAnime
} from "../manga/domain";
import { AnilistApi } from "./manga-api/AnilistApi";
import { ScanMangadexApi } from "./manga-api/ScanMangadexApi";

export const anilistMangaApi = new AnilistApi();
export const scanMangadexApi = new ScanMangadexApi();
export const getAllAnime = new GetAllAnime(anilistMangaApi);
export const getAnimeEpisodes = new GetAnimeEpisodes(anilistMangaApi);
export const getScanChapter = new GetScanChapters(scanMangadexApi); 
export const getScanChapterPages = new GetScanChapterPage(scanMangadexApi);
export const searchAnime = new SearchAnime(scanMangadexApi);
