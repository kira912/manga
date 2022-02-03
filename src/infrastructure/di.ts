import {
    GetAllAnime,
    GetAnimeEpisodes,
    GetScanChapters,
    GetScanChapterPage,
    SearchManga,
    GetAllManga
} from "../manga/domain";
import { AnilistApi } from "./manga-api/anilist/AnilistApi";
import { MangaApiMangaDex } from "./manga-api/mangaDex/MangaApiMangaDex";
import { ScanMangaDexApi } from "./manga-api/mangaDex/ScanMangaDexApi";

export const anilistMangaApi = new AnilistApi();
export const scanMangadexApi = new ScanMangaDexApi();
export const mangadexApi = new MangaApiMangaDex();

export const getAllManga = new GetAllManga(mangadexApi);

export const getAllAnime = new GetAllAnime(anilistMangaApi);
export const getAnimeEpisodes = new GetAnimeEpisodes(anilistMangaApi);
export const getScanChapter = new GetScanChapters(scanMangadexApi);
export const getScanChapterPages = new GetScanChapterPage(scanMangadexApi);
export const searchAnime = new SearchManga(mangadexApi);
