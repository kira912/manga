import {
    GetAllAnime,
    GetAnimeEpisodes,
    GetScanChapters,
    GetScanChapterPage
} from "../manga/domain";
import { AnilistApi } from "./manga-api/AnilistApi";
import { MangaScanOrgScrapper } from "./scrapper/MangaScanOrgScrapper";

export const anilistMangaApi = new AnilistApi();
export const getAllAnime = new GetAllAnime(anilistMangaApi);
export const mangaOrgScrapper = new MangaScanOrgScrapper();
export const getAnimeEpisodes = new GetAnimeEpisodes(anilistMangaApi);
export const getScanChapter = new GetScanChapters(mangaOrgScrapper); 
export const getScanChapterPages = new GetScanChapterPage(mangaOrgScrapper);
