import {
    GetAllAnime,
    GetAnimeEpisodes,
    GetScanChapters,
    GetScanChapterPage,
    SearchAnime,
    GetAllManga
} from "../manga/domain";
import { AnilistApi } from "./manga-api/AnilistApi";
import { MangaApiMangaDex } from "./manga-api/MangaDex/MangaApiMangaDex";
import { ScanMangaDexApi } from "./manga-api/MangaDex/ScanMangaDexApi";

export const anilistMangaApi = new AnilistApi();
export const scanMangadexApi = new ScanMangaDexApi();
export const mangadexApi = new MangaApiMangaDex();

export const getAllManga = new GetAllManga(mangadexApi);

export const getAllAnime = new GetAllAnime(anilistMangaApi);
export const getAnimeEpisodes = new GetAnimeEpisodes(anilistMangaApi);
export const getScanChapter = new GetScanChapters(scanMangadexApi);
export const getScanChapterPages = new GetScanChapterPage(scanMangadexApi);
export const searchAnime = new SearchAnime(mangadexApi);
